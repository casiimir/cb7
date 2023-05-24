import { usersList } from "./utils/credentials.js";

export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

const createProdInCart = (cartData) => {
  const wrapperEl = createEl("div", "", { name: "class", value: "cartItem" });
  const titleEl = createEl("h4", cartData.title);
  const priceEl = createEl("p", "Price: " + cartData.price);
  const quantityEl = createEl("p", "Quantity: " + cartData.quantity);

  wrapperEl.append(titleEl, priceEl, quantityEl);

  return wrapperEl;
};

const loginModalEl = createEl("form", "", { name: "class", value: "login" });
const loginTitleEl = createEl("h2", "Log In", {
  name: "class",
  value: "login__title",
});
const loginUsernameEl = createEl(
  "input",
  "",
  { name: "type", value: "text" },
  { name: "placeholder", value: "Username ..." }
);
const loginPasswordEl = createEl(
  "input",
  "",
  { name: "type", value: "password" },
  { name: "placeholder", value: "Password ..." }
);
const loginSubmitEl = createEl(
  "input",
  "",
  { name: "type", value: "submit" },
  { name: "value", value: "Accedi" }
);

loginModalEl.append(
  loginTitleEl,
  loginUsernameEl,
  loginPasswordEl,
  loginSubmitEl
);
document.body.append(loginModalEl);

// Events
loginModalEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const loggedUser = usersList.find(
    (user) =>
      user.username === e.target[0].value && user.password === e.target[1].value
  );

  if (loggedUser) {
    document.body.textContent = "";

    const headingEl = createEl(
      "h1",
      `${loggedUser.username} benvenuto al tuo carrello!`,
      { name: "class", value: "cart__title" }
    );

    const cartListEl = createEl("div", "", {
      name: "class",
      value: "cart__cartList",
    });

    fetch(`https://dummyjson.com/carts/${loggedUser.id}`)
      .then((res) => res.json())
      .then((data) =>
        data.products.forEach((product) =>
          cartListEl.append(createProdInCart(product))
        )
      )
      .then(() => document.body.append(headingEl, cartListEl));
  } else {
    alert("Credenziali non corrette");
    loginUsernameEl.style.border = "1px solid red";
    loginPasswordEl.style.border = "1px solid red";
    loginUsernameEl.value = "";
    loginPasswordEl.value = "";
  }
});

// ARRAY DESTRUCTURING
// const fruits = ['orange', 'mango', 'apple', 'kiwi', 'watermelon']

// Identico a riga 103
// const firstFruit = fruits[0]
// const secondFruit = fruits[1]
// const thirdFruit = fruits[2]

// Identico a riga 98 - 99 - 100
// const [firstFruit, secondFruit, thirdFruit] = fruits

// OBJECT DESTRUCTURING
// const userData = {
//   name: 'Pippo',
//   age: 32,
//   surname: 'Pluto'
// }

// Identico a riga 118
// const username = userData.name
// const surname = userData.surname
// const userAge = userData.age

// Identico a riga 113 - 114 - 115
// const { name, age, surname } = userData;
