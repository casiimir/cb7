import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <p>Nome</p>
      <p>Email</p>
      <p>Age</p>
    </div>
  ) : (
    navigate("/login")
  );
}
