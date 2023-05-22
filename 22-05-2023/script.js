import { getWeatherData, getWeatherCityData, cityGen } from "./fn/utils.js";
const root = document.querySelector("#root");
// const summaryEl = document.querySelector("h1");
const inputEl = document.querySelector("input");
// let weatherData = {};

// fetch(
//   "https://api.ambeedata.com/weather/latest/by-lat-lng?lat=38.1026&lng=13.3529",
//   {
//     headers: {
//       "x-api-key":
//         "00318b3964b2c2bc48ea46c06a85c3438d60083bccd65721991faa648350d840",
//     },
//   }
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// inputEl.addEventListener("change", (e) => {
//   const userLat = e.target.value / 2;

//   console.log("Latitudine", userLat);
//   getWeatherData(userLat, "43.3529").then((content) => {
//     weatherData = content.data;
//     summaryEl.textContent = weatherData.summary;
//   });
// });

inputEl.addEventListener("change", (e) => {
  getWeatherCityData(e.target.value).then((data) => {
    root.appendChild(cityGen(data));
  });
});
