// alert("Ciao");
// console.log('Ciao');

// let userName = prompt("Come 'ti' chiami?");
// let userAge = parseInt(prompt("Quanti anni hai?"));

// console.log("Ciao", userName, "quindi hai", userAge, "anni");

// COSTRUTTO IF-ELSEIF-ELSE
// if (userAge >= 18 && userAge <= 50) {
//   alert("Benvenuto nel sito! Sei maggiorenne");
// } else if (userAge === 17) {
//   alert("Ti facciamo entrare in via straordinaria! Tra poco sarai maggiorenne");
// } else {
//   alert("Non puoi entrare. Hai " + userAge + " anni");
// }

// let weekDay = "lunedi";
let weekDay = prompt("Inserisci un giorno della settimana").toLowerCase();

// COSTRUTTO SWITCH
// switch (weekDay) {
//   case "lunedi":
//     console.log("Inizio settimana, brutta storia... buona fortuna!");
//     break;
//   case "martedi":
//     console.log("Il peggio è passato, mancano 4 giorni al fine settimana!");
//   case "mercoledi":
//     console.log("Il peggio è passato, mancano 4 giorni al fine settimana!");
//     break;
//   case "venerdi":
//     console.log("Forza, tutto sta finendo!");
//     break;
//   default:
//     console.log(weekDay + " non è presente all'interno dello switch");
// }

weekDay === "lunedi"
  ? console.log("È Lunedi!!!") // condizione di verità
  : console.log("Non è Lunedì!"); // condizione di falsità

// SINTASSI
// (condizione) ? istruzioneVera : istruzioneFalsa
