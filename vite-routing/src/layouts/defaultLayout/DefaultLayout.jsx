import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const DefaultLayout = ({ children }) => {
  const links = [
    {
      id: 1,
      name: "Homepage",
      value: "/",
    },
    {
      id: 2,
      name: "About",
      value: "/about",
    },
    {
      id: 3,
      name: "Who",
      value: "/who",
    },
  ];

  return (
    <div className={styles.DefaultLayout}>
      <Outlet />
      <div className={styles.navbar}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.value}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
      <div className={styles.footer}>
        <p>copyright 2023 {"<3"} Edgemony CB7</p>
      </div>
    </div>
  );
};

export default DefaultLayout;
