function updateForcast(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "o79b0b278ad643abf38d0abtfa4f526c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateForcast);
}

function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", citySearch);

searchCity("Rio");
