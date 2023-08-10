
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "b4241aedd9msh75faa7e2dafe3d1p102b22jsn519eecbe481a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const cities = [
  "London",
  "Dubai",
  "Singapore",
  "Paris",
  "Tokyo",
  "Mumbai"
];

const weatherData = {};

const updateWeather = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      weatherData[city] = response;
      updateTable(city);
    })
    .catch((err) => console.error(err));
};

const updateTable = (city) => {
  const data = weatherData[city];
  if (data) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${city}</td>
      <td>${data.cloud_pct}</td>
      <td>${data.temp}</td>
      <td>${data.feels_like}</td>
      <td>${data.humidity}</td>
      <td>${data.min_temp}</td>
      <td>${data.max_temp}</td>
      <td>${data.wind_speed}</td>
      <td>${data.wind_degrees}</td>
      <td>${data.sunrise}</td>
      <td>${data.sunset}</td>
    `;
    document.querySelector('table').appendChild(row);
  }
};

// Call the updateWeather function for each city
cities.forEach((city) => {
  updateWeather(city);
});

const City = document.getElementById("City");
const Submit = document.getElementById("Submit");

const getWeather = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityname.innerHTML = city;
      Cloud_pct.innerHTML = response.cloud_pct;
      Temp.innerHTML = response.temp;
      Feels_like.innerHTML = response.feels_like;
      Humidity.innerHTML = response.humidity;
      Min_temp.innerHTML = response.min_temp;
      Max_temp.innerHTML = response.max_temp;
      Wind_speed.innerHTML = response.wind_speed;
      Wind_degrees.innerHTML = response.wind_degrees;
      Sunrise.innerHTML = response.sunrise;
      Sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

Submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityValue = City.value;
  getWeather(cityValue);
});

// Call the getWeather function with the initial city
getWeather("DELHI");