function carMainInfo(pippo) {
  console.log("====================");
  console.log(pippo.color);
  console.log(pippo.seats);
  console.log(pippo.brand);
  console.log("Ruote:", pippo.wheels);
  console.log("====================");
  return `La macchina ${pippo.model} costa ${pippo.price}$$`;
  // console.log(2); // Non verrà mai eseguito!
}

const firstCar = {
  color: "red",
  brand: "Ferrari",
  model: "Testa rossa",
  seats: 3,
  price: 1000,
  wheels: 4,
};

const secondCar = {
  color: "blue",
  brand: "Aston Martin",
  model: "DB9",
  seats: 5,
  price: 800,
};

console.log(carMainInfo(firstCar));
console.log(carMainInfo(secondCar));
