import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/routes/productsStatic.css";

export default function () {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const onHandleClick = (id) => navigate(`/products/${id}`);

  const onProductRender = () =>
    products.map(({ thumbnail, title, id }) => (
      <img
        onClick={() => onHandleClick(id)}
        src={thumbnail}
        alt={title}
        key={title}
      />
    ));

  return (
    <div className="ProductsStatic">
      {products.length ? onProductRender() : <p>Loading...</p>}
    </div>
  );
}
