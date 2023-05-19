import {
  cartItems,
  rootEl,
  cartEl,
  productList,
  navbarEl,
  heroEl,
  productListTitle,
  productListData,
} from "../script.js";
import { usersList } from "./credentials.js";

export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const qSA = (els) => document.querySelectorAll(els);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 5).join(" ") + " ...";

// Sezione singolo prodotto (card)
export const createProduct = (data, size = null) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  if (size) {
    wrapperEl.style.height = size + "px";
  }

  wrapperEl.className = "productCard";
  wrapperEl.setAttribute("id", data.id);
  textWrapperEl.className = "productCard__text";
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  titleEl.textContent = data.title;
  descriptionEl.textContent = formatDescriptionText(data.description);
  ratingEl.textContent = data.rating;
  priceEl.textContent = data.price + " $";

  textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl);
  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

// Sezione singolo prodotto (modale)
export const createProductModal = (productData, parent = null) => {
  const wrapperEl = cE("div");
  const overlayEl = cE("div");
  const galleryEl = cE("div");
  const mainImgEl = cE("img");
  // const thumbWrapperEl = cE("div");
  const textEl = cE("div");
  const mainTextEl = cE("div");
  const mainTextTitleEl = cE("h1");
  const mainTextDescEl = cE("p");
  const mainTextRateEl = cE("p");
  const buyTextEl = cE("div");
  const buyTextFirstBtnEl = cE("button");
  const buyTextSecondBtnEl = cE("button");
  // const closeBtnEl = cE("button");

  wrapperEl.className = "modalProduct";
  overlayEl.className = "modalOverlay";
  galleryEl.className = "modalProduct__gallery";
  mainImgEl.src = productData.thumbnail;
  mainImgEl.alt = productData.title;

  textEl.className = "modalProduct__text";
  mainTextEl.className = "modalMainText";
  mainTextTitleEl.textContent = productData.title;
  mainTextDescEl.textContent = productData.description;
  mainTextRateEl.textContent = productData.rating;

  buyTextEl.className = "modalMainBuy";
  buyTextFirstBtnEl.textContent = "Compra adesso";
  buyTextSecondBtnEl.textContent = "Torna indietro";

  // closeBtnEl.className = "closeModalBtn";
  // closeBtnEl.textContent = "X";

  // productData.images.forEach(image => )

  mainTextEl.append(mainTextTitleEl, mainTextDescEl, mainTextRateEl);
  buyTextEl.append(buyTextFirstBtnEl, buyTextSecondBtnEl);
  galleryEl.append(mainImgEl);
  textEl.append(mainTextEl, buyTextEl);
  wrapperEl.append(overlayEl, galleryEl, textEl);

  if (parent) {
    overlayEl.addEventListener("click", () => parent.removeChild(wrapperEl));
    buyTextSecondBtnEl.addEventListener("click", () =>
      parent.removeChild(wrapperEl)
    );
  }

  buyTextFirstBtnEl.addEventListener("click", () => {
    alert("Prodotto aggiunto al carrello!");
    cartItems.push(productData);
    parent.removeChild(wrapperEl);

    if (cartItems.length >= 1) {
      cartEl.classList.add("itemsInCart");
    }
  });

  return wrapperEl;
};

export const createCartModal = (cartItems, parent = null) => {
  const wrapperEl = cE("div");
  const totalItemsEl = cE("h2");
  const priceEl = cE("p");
  const closeBtnEl = cE("button");

  wrapperEl.className = "cartModal";
  totalItemsEl.textContent = `Prodotti presenti nel carrello: ${cartItems.length}`;
  closeBtnEl.className = "cartModal__closeBtn";
  closeBtnEl.textContent = "X";
  priceEl.textContent = `Totale: ${cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  )}`;

  cartItems.forEach((item) => {
    // const titleEl = cE("h4");
    // const descriptionEl = cE("p");

    // titleEl.textContent = item.title;
    // descriptionEl.textContent = item.description;

    // wrapperEl.append(titleEl, descriptionEl);
    wrapperEl.append(closeBtnEl, createProduct(item), totalItemsEl, priceEl);
  });

  closeBtnEl.addEventListener("click", () => {
    parent.removeChild(wrapperEl);
    cartEl.disabled = false;
  });

  return wrapperEl;
};

export const createLogIn = () => {
  const wrapperEl = cE("form");
  const usernameInputEl = cE("input");
  const passwordInputEl = cE("input");
  const submitBtnEl = cE("input");

  wrapperEl.className = "login";
  usernameInputEl.type = "text";
  usernameInputEl.placeholder = "Username";
  passwordInputEl.type = "password";
  passwordInputEl.placeholder = "Password";
  submitBtnEl.type = "submit";

  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const isAuth = !!usersList.find(
      (user) =>
        user.username === event.srcElement[0].value &&
        user.password === event.srcElement[1].value
    );

    if (isAuth) {
      navbarEl.style.display = "flex";
      heroEl.style.display = "flex";
      rootEl.append(productListTitle, productList);
      rootEl.removeChild(wrapperEl);
    } else {
      alert("Username e/o password non corretta");
    }
  });

  wrapperEl.append(usernameInputEl, passwordInputEl, submitBtnEl);
  return wrapperEl;
};
