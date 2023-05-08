function createCard(obj) {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h2");

  cardEl.className = "animal-card";
  imgEl.src = obj.imgUrl;
  imgEl.alt = obj.title;
  titleEl.textContent = obj.title;

  cardEl.append(imgEl, titleEl);
  return document.body.appendChild(cardEl);
}

const animals = [
  {
    id: 1,
    title: "Cat",
    imgUrl: "https://freepngimg.com/download/cat/22193-3-adorable-cat.png",
  },
  {
    id: 2,
    title: "Dog",
    imgUrl: "https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png",
  },
  {
    id: 3,
    title: "Dino",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/009/378/085/original/cute-cartoon-dinosaur-character-free-png.png",
  },
  {
    id: 4,
    title: "Croco",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/1-2-crocodile-free-png-image.png",
  },
];

// const cardEl = document.createElement("div");
// const imgEl = document.createElement("img");
// const titleEl = document.createElement("h2");

// cardEl.className = "animal-card";
// imgEl.src = animals[0].imgUrl;
// imgEl.alt = animals[0].title;
// titleEl.textContent = animals[0].title;

// cardEl.append(imgEl, titleEl);
// document.body.appendChild(cardEl);

// Senza ciclo FOR
// createCard(animals[0]);
// createCard(animals[1]);
// createCard(animals[2]);
// createCard(animals[3]);

// Esempio/Mock oggetto singolo
let objExample = {
  title: "Pippo",
  imgUrl: "https://picsum.photos/200/300",
};

// Invocazione funzione singola per oggetto
createCard(objExample);
createCard(animals[1]);

// Invocazione per ogni singolo oggetto dentro l'array animals
for (let obj of animals) {
  createCard(obj);
}
