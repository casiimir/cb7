// console.log('ciao', 2, 'xD')

const evenNumbers = [2, 4, 6, 8];

// function sum([...pippo]) {
//   for (let num of pippo) console.log(num);
// }

// Spread Syntax
// function sum(...nums) {
//   let value = 0;

//   for (let num of nums) value += num;
//   // value = value + num

//   return value;
// }

// console.log(sum(2, 5, 10, 3, 1000));

// CALLBACKS
// const calculator = (operationFn) => operationFn; // ritorna il valore di operationFn

// Callback - non ancora
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const mod = (num1, num2) => num1 % num2;

// console.log(calculator(sum(2, 3))); // 5

// Callback - vere e proprie
const calculator = (num1, num2, operationFn) => operationFn(num1, num2); // Questo è il momento dell'invocazione della funzione `sum`

console.log(calculator(10, 5, sum)); // Questo non è il momento dell'invocazione di `sum`, ma la delega

// Ricostruzione metodo Math.max()
// const max = (...numbers) => {
//   let maxValue = 0;

//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] >= maxValue) maxValue = numbers[i];
//   }

//   return maxValue;
// };

// console.log(max(2,11,1,5,4))
