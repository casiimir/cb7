// console.log(document.querySelector("h1")); // QuerySelector selezione uno specifico elemento per:
// tag-name
// class-name (.)
// id-name (#)

// const firstTitle = document.querySelector("h1");

// console.log(firstTitle.textContent); // Contenuto testuale dell'elemento
// firstTitle.textContent = "Weilaaaaaaa!"; // Modifica il contenuto testuale di firstTitle
// firstTitle.style.color = "green"; // Modifica il colore dello stile dell'elemento firstTitle

// document.body
// document.querySelector('body')

// console.log(document);

// // Ritorno al passato (oggetti)
// const obj = {
//   name: "Casi", // Proprieta
//   surname: "Cianci", // Proprieta
//   age: 29, // Proprieta
//   doThis: function (value) { // Metodo
//     alert(value);
//   },
// };

// obj.doThis("Bla bla bla");

const bodyEl = document.body;
const heroEl = document.createElement("div"); // Creare un nuovo elemento - 1 Fase per creare un nuovo el.
const titleEl = document.createElement("h1");

heroEl.className = "hero";
heroEl.setAttribute("data-set", "questo è un valore"); // Aggiunge un attributo
titleEl.textContent = "Ciao ciao!";

heroEl.appendChild(titleEl);
bodyEl.appendChild(heroEl); // Appendere l'elemento creato - 2 Fase per creare un nuovo el.

// bodyEl.removeChild(heroEl); // Rimuove un elemento a partire dal padre che lo contiene
