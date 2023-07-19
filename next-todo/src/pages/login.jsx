import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { MainContext } from "@/store";
import styles from "../styles/Login.module.scss";

export default function Login() {
  const router = useRouter();
  const { state, dispatch } = useContext(MainContext);
  const [input, setInput] = useState("");

  const onHandleInput = (e) => setInput(e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: input });
    router.push("/");
  };

  return (
    <form className={styles.Login} onSubmit={onHandleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        value={input}
        onChange={onHandleInput}
        placeholder="Username ..."
      />
      <input type="submit" value="Login" />
    </form>
  );
}
