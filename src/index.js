function showWeather(response) {
  let currentWeather = response.data.weather[0].main;
  let currentTemperature = Math.round(response.data.main.temp);
  let currentHumidity = Math.round(response.data.main.humidity);
  let currentWindSpeed = Math.round(response.data.wind.speed);
  let currentCity = response.data.name;

  let city = document.querySelector("#current-city");
  city.innerHTML = currentCity;

  let temperature = document.querySelector("#current-temperature");
  temperature.innerHTML = currentTemperature;

  let weather = document.querySelector("#current-weather");
  weather.innerHTML = currentWeather;

  let humidity = document.querySelector("#current-humidity");
  humidity.innerHTML = currentHumidity;

  let windSpeed = document.querySelector("#current-wind-speed");
  windSpeed.innerHTML = currentWindSpeed;
}

function citySearch(event) {
  let cityInput = document.querySelector("#input-city");
  let cityDisplay = document.querySelector("#current-city");
  cityDisplay.innerHTML = `${cityInput.value}`;

  let apiKey = "54ba07154312ae04b556a9f3d50beea5";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(showWeather);
}

function currentWeatherSearch(event) {
  function retrievePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let unit = "metric";
    let apiCoordsKey = "54ba07154312ae04b556a9f3d50beea5";
    let apiCoordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiCoordsKey}&units=${unit}`;

    axios.get(apiCoordsUrl).then(showWeather);
  }

  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinute = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();

let formattedTime = document.querySelector("#current-date-time");
formattedTime.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", currentWeatherSearch);
