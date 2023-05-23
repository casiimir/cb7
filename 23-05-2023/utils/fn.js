import { DELETE } from "./http.js";

export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

export const productGen = (productData) => {
  const wrapperEl = createEl("div", "", { name: "class", value: "cartItem" });
  const titleEl = createEl("h4", productData.title, {
    name: "src",
    value: productData.title,
  });
  const priceEl = createEl("p", "Price: " + productData.price, {
    name: "class",
    value: "cartItem__title",
  });
  const quantityEl = createEl("p", "Quantity: " + productData.quantity, {
    name: "class",
    value: "cartItem__quantity",
  });

  wrapperEl.append(titleEl, priceEl, quantityEl);

  wrapperEl.addEventListener("click", () => {
    const isConfirmed = confirm("Sto per cancellare il prodotto, confermi?");
    if (isConfirmed) DELETE(`/carts/${productData.id}`);
  });

  return wrapperEl;
};
