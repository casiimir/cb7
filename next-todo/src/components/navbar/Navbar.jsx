import { useContext } from "react";
import { MainContext } from "@/store";
import styles from "./index.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(MainContext);

  const onHandleLogout = () => dispatch({ type: "SET_LOGOUT" });

  return (
    <div className={styles.Navbar}>
      <p>{state.username}</p>
      {state.username && <p onClick={onHandleLogout}>✈️</p>}
    </div>
  );
};

export default Navbar;
