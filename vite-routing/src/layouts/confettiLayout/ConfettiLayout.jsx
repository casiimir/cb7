import Confetti from "react-confetti";
import styles from "./index.module.scss";

const ConfettiLayout = ({ children }) => {
  return (
    <div className={styles.ConfettiLayout}>
      <Confetti width="1024" height="1024" numberOfPieces="500" />
      {children}
    </div>
  );
};

export default ConfettiLayout;
