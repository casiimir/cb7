const BASE_URL = "http://.....";

// SCOPE
let letName = "Pippo"; // variabile
const constName = "Pippo"; // costante
var varName = "Pippo"; // da evitare!

letName = "Pluto"; // Va bene - riassegnazione
// constName = "Pluto";  // Non va bene
varName = "Pluto";

console.log(varName, letName);

let firstName = "Casi"; // Scope globale

if (2 > 1) {
  let surname = "Cian"; // Scope locale
  var age = 29; // Scope globale

  firstName = "Miro";

  console.log("Siamo dentro l if =>", surname);
}

console.log(firstName);
// console.log(surname); // Errore, siamo fuori scope
console.log(age);
