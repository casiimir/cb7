import Card from "../card";
import "./index.css";

const ProductList = ({ products, emoji }) => {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <Card data={product} emoji={emoji} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
