// try {
//   // Fai questo
//   console.log(45 + 20);
//   console.log(firstName);
//   console.log(1);
// } catch {
//   console.error("Ma che combini?");
//   console.log(22222);
// }

const itemsEl = document.querySelector(".items");

fetch("https://dummyjson.com/products")
  .then((res) => {
    try {
      // console.log("TRY");
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Risposta fallita");
      }
    } catch (err) {
      // console.log("CATCH");
      console.error(err);
      return {
        products: [
          {
            title: "Prodotti non trovati",
          },
        ],
      };
    } finally {
      // console.log("FINALLY");
    }
  })
  .then((data) => {
    data.products.forEach((item) => {
      const itemEl = document.createElement("li");

      itemEl.className = "items__list";
      itemEl.textContent = item.title;

      itemsEl.appendChild(itemEl);
    });
  });

// Operazioni su array
// let fruits = ["apple", "kiwi"];

// fruits = [...fruits, "orange"]
//   => [("apple", "kiwi", "orange")];

// const newFruits = ["ananas", "pear"];

// fruits = [...fruits, ...newFruits]
//   => ("apple", "kiwi", "orange", "ananas", "pear")
//
