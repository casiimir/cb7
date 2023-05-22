// Funzioni ASYNC.
export const getWeatherData = async (lat, lng) => {
  const res = await fetch(
    `https://api.ambeedata.com/weather/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
    {
      headers: {
        "x-api-key": "API_KEY_VA_QUI",
      },
    }
  );
  const data = await res.json();

  return data;
};

export const getWeatherCityData = async (city) => {
  //
  const res = await fetch(
    `http://api.weatherstack.com/current?access_key={API_KEY_VA_QUI}=${city}`
  );

  const data = await res.json();

  return data;
};

export const cityGen = (cityData) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h3");

  wrapperEl.className = "city";
  imgEl.src = cityData.current.weather_icons[0];
  titleEl.textContent = cityData.location.name;

  wrapperEl.append(imgEl, titleEl);
  return wrapperEl;
};
