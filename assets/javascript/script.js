// Initialized variables

// API URLs
const APIkey = 'd706a8baa5538ab15ced6f4891dbff96';

// HTML Elements
const mainWeatherSearch = $('#primary-weather-search');
const citySearchInput = $('#main-city-input');

// Fetch API Data
const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error if needed
    }
};

// Event listener for main city search form
mainWeatherSearch.on('submit', (event) => {
    event.preventDefault();

    let city = citySearchInput.val().toLowerCase();
    let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIkey}`;
    console.log(`city: ${city}`)

    // Fetching city location geocode data
    getData(geoUrl)
        .then((data) => {
            let lat = data[0].lat;
            let lon = data[0].lon;

            console.log(`Lat: ${lat}`)
            console.log(`Lon: ${lon}`)
        })
        .catch((error) => {
            console.error('Error:', error);
        })

})

const getCurrentWeather = async () => {
    const response = await fetch(geoUrl);
    const data = await response.json();
}