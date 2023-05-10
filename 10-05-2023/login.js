const qS = (element) => document.querySelector(element);
// const cE = (element) => document.createElement(element);

// const formEl = document.querySelector('.form')
const credentials = {
  username: "Pippo",
  password: "pippoSuperstar2000",
};
const formEl = qS(".form");
const usernameInputEl = qS(".username");
const passwordInputEl = qS(".password");
const modalEl = qS(".modal");

// usernameInputEl.addEventListener("input", (e) => console.log(e.target.value));

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    e.target[0].value === credentials.username &&
    e.target[1].value === credentials.password
  ) {
    // alert("Benvenuto!");
    modalEl.style.opacity = 1;
    modalEl.textContent = modalEl.textContent.replace(
      "NOME!",
      e.target[0].value
    );
  } else {
    alert("Chi sei!?");
  }
});
