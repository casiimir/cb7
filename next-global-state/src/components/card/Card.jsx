import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  const { state, dispatch } = useContext(MainContext);

  const onHandleSomething = () =>
    dispatch({ type: "SET_USERNAME", payload: "Pluto" });

  return (
    <div className={styles.Card}>
      <h3>Name: {data.name}</h3>
      <h4>Gender: {data.gender === "male" ? "M" : "F"}</h4>
      <p>Heigth: {data.height}</p>
      <p>Hair color: {data.hair_color}</p>
      <p onClick={onHandleSomething}>{state.isLogged && "presente!"}</p>
    </div>
  );
};

export default Card;
