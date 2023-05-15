import { cE, qS, createProduct } from "./utils/fn.js";

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");

productList.className = "productList";
productListTitle.textContent = "Products for you!";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) =>
      productList.append(createProduct(product))
    )
  );

rootEl.append(productListTitle, productList);
