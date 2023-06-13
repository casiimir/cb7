import "./index.css";

const Card = ({ data }) => {
  const onHandleClick = () => alert(data.title);

  return (
    <div className="Card" onClick={onHandleClick}>
      <img className="Card__img" src={data.thumbnail} alt={data.title} />
      <h4 className="Card__title">{data.title}</h4>
      <p className="Card__brand">{data.brand}</p>
      <div className="Card__info">
        <span className="Card__info--like">❤️</span>
        <a className="Card__info--price" href="/">
          $ {data.price}
        </a>
      </div>
    </div>
  );
};

export default Card;
