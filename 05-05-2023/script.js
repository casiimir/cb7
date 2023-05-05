// Array

const userName = "Casi";
const userAge = 29;
const profession = "Dev";

const userInfo = ["Casi", 29, profession];
console.log("La mia professione è: " + userInfo[2]);

const userNameCopy = userName;
const userInfoCopy = userInfo;

// Differenza tra valore primitivo e valore di reference
console.log("userName - primitiva (string)", userNameCopy == userName);
console.log("userInfo - reference (array)", userInfoCopy === userInfo);

console.log(userInfoCopy.pop());
console.log(userInfoCopy);
console.log(userInfo);

console.log(userInfo.indexOf("Casi"));
console.log(userInfo.length);
userInfo.sort();

// FOR
console.log("FOR");
for (let i = 0; i <= userInfo.length; i++) {
  console.log(userInfo[i]);
}

// console.log(userInfo[0])
// console.log(userInfo[1])
// console.log(userInfo[2]) => undefined
// console.log(userInfo[3]) => undefined

// i++ => i = i + 1 => i += 1
// ++i

// Esempio inverso
// for (let i = userInfo.length; i >= 0; i--) {
//   console.log(userInfo[i]);
// }

// let symbols = "";

// for (let i = 0; i <= 10; i++) {
//   symbols += "#";
//   console.log(symbols);
// }

// FOR IN - (index) / FOR OF (element)
const fruits = ["apple", "kiwi", "pear", "orange"];

for (let fruit in fruits) {
  console.log(fruit);
}

for (let fruit of fruits) {
  console.log(fruit);
}

console.log("FUNCTIONS");

// Definizione
// function sum() {
//   let localScopedVar = "Pippo";

//   console.log(2 + 2);
//   console.log(fruits);
//   console.log(localScopedVar);

//   return 1;
// }

// Invocazione
// sum();
// console.log(localScopedVar);
// console.log(sum());

function sum(num1, num2 = 2) {
  // Definizione => Parametri
  return num1 + num2; // Valore di ritorno
}

// sum(1, 5); // Invocazione => Argomenti
console.log(sum(1, 11));

// OBJECTS
console.log("OBJECTS");

const casiInfo = {
  name: "Casi",
  age: 27,
  profession: "Dev",
};

console.log(casiInfo);
console.log(casiInfo.name);
console.log(casiInfo["age"]);
// console.log(casiInfo.age);

casiInfo.name = "Pippo";
console.log(casiInfo);

casiInfo.qualcosaDiNuovo = 2222;
console.log(casiInfo);
