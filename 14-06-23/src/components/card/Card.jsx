import { useState } from "react";
import "./index.css";

const Card = ({ data, emoji }) => {
  const [isWalking, setWalking] = useState(false);

  // const onHandleClick = () => alert(data.title);

  const onHandleDinoClick = () => setWalking(true);

  return (
    <div className={`Card ${data.category}`}>
      <img className="Card__img" src={data.thumbnail} alt={data.title} />
      <h4 className="Card__title">{data.title}</h4>
      <p className="Card__brand">{data.brand}</p>
      <div className="Card__info">
        <span
          className={`Card__info--like ${isWalking && "walking"}`}
          onClick={onHandleDinoClick}
        >
          {emoji}
        </span>
        <a className="Card__info--price" href="/">
          $ {data.price}
        </a>
      </div>
    </div>
  );
};

export default Card;
