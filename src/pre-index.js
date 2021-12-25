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

function citySearch(event) {
  let cityInput = document.querySelector("#input-city");
  let cityDisplay = document.querySelector("#current-city");
  cityDisplay.innerHTML = `${cityInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

function celsiusTemp(event) {
  let temperatureC = document.querySelector("#current-temperature");
  temperatureC.innerHTML = 17;
}

let buttonCelsius = document.querySelector("#celsius");
buttonCelsius.addEventListener("click", celsiusTemp);

function fahrenheitTemp(event) {
  let temperatureF = document.querySelector("#current-temperature");
  temperatureF.innerHTML = 66;
}

let buttonFahrenheit = document.querySelector("#fahrenheit");
buttonFahrenheit.addEventListener("click", fahrenheitTemp);
