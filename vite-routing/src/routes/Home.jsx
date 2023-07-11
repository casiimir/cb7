import { Outlet } from "react-router-dom";
import styles from "../styles/Home.module.scss";

function App() {
  return (
    <div className={styles.Home}>
      <p>HomePage</p>
      <h2>Ciao</h2>
      <Outlet />
    </div>
  );
}

export default App;
