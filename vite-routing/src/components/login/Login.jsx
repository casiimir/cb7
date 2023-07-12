import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../mocks/auth";
import styles from "./index.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);

  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {
      if (auth.username === username && auth.password === password) {
        navigate("/dashboard");
        localStorage.setItem("auth", true);
      }
      throw new Error("Credenziali non valide");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          value={username}
          onChange={onHandleUsername}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={password}
          onChange={onHandlePassword}
          type="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default Login;
