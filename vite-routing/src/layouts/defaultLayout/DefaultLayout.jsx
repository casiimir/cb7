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
    {
      id: 4,
      name: "👤",
      value: "/login",
    },
    {
      id: 5,
      name: "Dashboard",
      value: "/dashboard",
    },
  ];

  return (
    <div className={styles.DefaultLayout}>
      <div className={styles.navbar}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.value}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <p>copyright 2023 {"<3"} Edgemony CB7</p>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
