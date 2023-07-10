import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import "../../styles/routes/products.css";

export default function Products() {
  // const location = useLocation();
  const params = useParams();
  // const navigate = useNavigate();

  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  // const onHandleClick = () => navigate("/products");

  return (
    <div className="Products">
      <h1>{productData.title}</h1>
      <img src={productData.thumbnail} alt={productData.title} />
      <p>{productData.price}</p>

      {/* <button onClick={onHandleClick} className="Products__btn">
        Back
      </button> */}

      <Link to="/products">
        <button className="Products__btn">Back</button>
      </Link>
    </div>
  );
}
