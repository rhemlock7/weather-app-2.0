// Initialized variables
let city;

// API URLs
const APIkey = 'd706a8baa5538ab15ced6f4891dbff96';
const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`;

// HTML Elements
const mainWeatherSearch = $('#primary-weather-search');
const citySearchInput = $('#main-city-input');

// Fetching API data
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);
}

// Event listener for main city search form
mainWeatherSearch.on('submit', function (event) {
    event.preventDefault();
    
    city = citySearchInput.val().toLowerCase();
    console.log(city)
})

//getData(geoUrl)
