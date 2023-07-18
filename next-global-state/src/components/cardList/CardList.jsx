import Card from "../card/Card";
import styles from "./index.module.scss";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      <h3>People</h3>
      <div className={styles.list}>
        {data.results.map((person) => (
          <Card data={person} key={person.name} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
