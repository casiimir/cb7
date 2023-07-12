import { Outlet, useLocation } from "react-router-dom";
import styles from "../styles/Home.module.scss";

function App() {
  // const location = useLocation();
  // console.log(location);

  return (
    <div className={styles.Home}>
      {/* {location.pathname === "/" && (
        <>
          <p>HomePage</p>
          <h2>Homepage</h2>
        </>
      )}

      <Outlet /> */}

      <p>HomePage</p>
      <h2>Homepage</h2>
    </div>
  );
}

export default App;
