let covidData;

fetch(
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"
)
  .then((res) => res.json())
  .then((data) => {
    covidData = data;
  })
  .then(() => {
    console.log(covidData);
    console.log(Array.isArray(covidData));
  });

console.log(document.querySelector("body"));
