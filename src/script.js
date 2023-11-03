// When page is reloaded the current location weather details will automatically display if geolocation is allowed
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  function showPositionWeather(response) {
    let positionCityName = response.data.name;
    let positionLocation = document.querySelector("h1");
    positionLocation.innerHTML = `${positionCityName}`;

    let showTempPosition = Math.round(response.data.main.temp);
    let tempTodayPosition = document.querySelector("#temp-today");
    tempTodayPosition.innerHTML = `${showTempPosition}`;

    let showWeatherDescriptionPosition = response.data.weather[0].main;
    let weatherDescriptionPosition = document.querySelector(
      "#weather-description"
    );
    weatherDescriptionPosition.innerHTML = `${showWeatherDescriptionPosition}`;

    let showTempMinPosition = Math.round(response.data.main.temp_min);
    let tempMinTodayPosition = document.querySelector("#temp-min-today");
    tempMinTodayPosition.innerHTML = `${showTempMinPosition}${unitDegrees}`;

    let showTempMaxPosition = Math.round(response.data.main.temp_max);
    let tempMaxTodayPosition = document.querySelector("#temp-max-today");
    tempMaxTodayPosition.innerHTML = `${showTempMaxPosition}${unitDegrees}`;

    let showHumidityPosition = response.data.main.humidity;
    let humidityTodayPosition = document.querySelector("#humidity-today");
    humidityTodayPosition.innerHTML = `Humidity: ${showHumidityPosition}%`;

    let showWindSpeedPosition = response.data.wind.speed;
    let windSpeedTodayPosition = document.querySelector("#wind-speed-today");
    windSpeedTodayPosition.innerHTML = `Wind: ${showWindSpeedPosition}${unitSpeed}`;
  }

  let apiUrlLatLon = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrlLatLon).then(showPositionWeather);
}

function citySearch(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;

  function showInputWeather(response) {
    let showTempInput = Math.round(response.data.main.temp);
    let tempTodayInput = document.querySelector("#temp-today");
    tempTodayInput.innerHTML = `${showTempInput}`;

    let showWeatherDescriptionInput = response.data.weather[0].main;
    let weatherDescriptionInput = document.querySelector(
      "#weather-description"
    );
    weatherDescriptionInput.innerHTML = `${showWeatherDescriptionInput}`;

    let showTempMinInput = Math.round(response.data.main.temp_min);
    let tempMinTodayInput = document.querySelector("#temp-min-today");
    tempMinTodayInput.innerHTML = `${showTempMinInput}${unitDegrees}`;

    let showTempMaxInput = Math.round(response.data.main.temp_max);
    let tempMaxTodayInput = document.querySelector("#temp-max-today");
    tempMaxTodayInput.innerHTML = `${showTempMaxInput}${unitDegrees}`;

    let showHumidityInput = response.data.main.humidity;
    let humidityTodayInput = document.querySelector("#humidity-today");
    humidityTodayInput.innerHTML = `Humidity: ${showHumidityInput}%`;

    let showWindSpeedInput = response.data.wind.speed;
    let windSpeedTodayInput = document.querySelector("#wind-speed-today");
    windSpeedTodayInput.innerHTML = `Wind: ${showWindSpeedInput}${unitSpeed}`;
  }
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrlCity).then(showInputWeather);
}

let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
let units = "metric";
let unitDegrees = "°C";
let unitSpeed = "kmph";
navigator.geolocation.getCurrentPosition(showPosition);

//Clicking the actual <button> doesn't work need to fix this. Pressing enter works.
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", citySearch);

let weekDays = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let calendarMonths = [
  `January`,
  `Februry`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `Septemper`,
  `October`,
  `November`,
  `December`,
];
let currentData = new Date();
let currentDayArray = currentData.getDay();
let currentMonthArray = currentData.getMonth();
let day = weekDays[currentDayArray];
let month = calendarMonths[currentMonthArray];
let year = currentData.getFullYear();
let date = currentData.getDate();
let time = currentData.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

//Need to update the date & time according to input location to overwrite current geolocation when a new location is inputted.
let dateMonthCurrent = document.querySelector("#date-month-year-current");
dateMonthCurrent.innerHTML = `${date} ${month}, ${year}`;
let dayTimeCurrent = document.querySelector("#day-time-current");
dayTimeCurrent.innerHTML = `${day} ${time}`;
