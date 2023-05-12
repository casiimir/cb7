// console.log("Ho appena avviato il programma");

// setTimeout(() => {  // Esegue la funzione dopo 5 secondi
//   console.log("Sono passati 5 secondi");
// }, 5000);

// console.log("Questo è l ultimo messaggio");

// console.log("Ho appena avviato il programma");

// const intervalId = setInterval(() => {
//   // Ripete la funzione ogni secondo
//   console.log(
//     `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
//   );
// }, 1000);

// console.log("Questo è l ultimo messaggio");

// let timer = 9;

// const intervalId = setInterval(() => {
//   // Ripete la funzione ogni secondo
//   console.log(timer);
//   timer -= 1;
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// const launchTheAtomic = setTimeout(() => {
//   console.log("BUUMM!!! Addio e grazie per tutto il pesce");
// }, 10000);

// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", () => {
//   clearTimeout(launchTheAtomic);
//   clearInterval(intervalId);
// });

const modalGen = (data) => {
  const wrapperEl = document.createElement("div");
  const titleEl = document.createElement("h3");
  const parEl = document.createElement("p");
  const confirmBtnEl = document.createElement("button");

  wrapperEl.className = "modal";
  confirmBtnEl.textContent = "Accetta";
  parEl.textContent = data.description;
  titleEl.textContent = data.title;

  wrapperEl.append(titleEl, parEl, confirmBtnEl);
  return wrapperEl;
};

const rootEl = document.getElementById("root");

setTimeout(() => {
  rootEl.appendChild(
    modalGen({
      title: "Sono una modale",
      description: "Lorem ipsum dolor sit amet",
    })
  );
}, 5000);

// document
//   .querySelector("button")
//   .addEventListener(
//     "click",
//     () => (document.querySelector(".modal").style.display = "none")
//   );
