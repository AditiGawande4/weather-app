const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};

function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5 + 32).toFixed(2); // Convert Kelvin to Fahrenheit
}

async function fetchWeather(city) {
    try {
        const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${encodeURIComponent(city)}`;
        const response = await fetch(url, options);
        const data = await response.json();

        if (city.toLowerCase() === 'chicago') {
            document.getElementById('chicago_temp').innerHTML = `${kelvinToFahrenheit(data.main.temp)} °F`;
            document.getElementById('chicago_temp_min').innerHTML = `${kelvinToFahrenheit(data.main.temp_min)} °F`;
            document.getElementById('chicago_temp_max').innerHTML = `${kelvinToFahrenheit(data.main.temp_max)} °F`;
            document.getElementById('chicago_feels_like').innerHTML = `${kelvinToFahrenheit(data.main.feels_like)} °F`;
            document.getElementById('chicago_humidity').innerHTML = `${data.main.humidity}%`;
            document.getElementById('chicago_wind_speed').innerHTML = `${data.wind.speed}`;
            document.getElementById('chicago_sunrise').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('chicago_sunset').innerHTML = data.sys.sunset
                ? new Date(data.sys.sunset * 1000).toLocaleTimeString()
                : 'N/A';
        } else if (city.toLowerCase() === 'london') {
            document.getElementById('london_temp').innerHTML = `${kelvinToFahrenheit(data.main.temp)} °F`;
            document.getElementById('london_temp_min').innerHTML = `${kelvinToFahrenheit(data.main.temp_min)} °F`;
            document.getElementById('london_temp_max').innerHTML = `${kelvinToFahrenheit(data.main.temp_max)} °F`;
            document.getElementById('london_feels_like').innerHTML = `${kelvinToFahrenheit(data.main.feels_like)} °F`;
            document.getElementById('london_humidity').innerHTML = `${data.main.humidity}%`;
            document.getElementById('london_wind_speed').innerHTML = `${data.wind.speed}`;
            document.getElementById('london_sunrise').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('london_sunset').innerHTML = data.sys.sunset
                ? new Date(data.sys.sunset * 1000).toLocaleTimeString()
                : 'N/A';
        } else {
            // Dynamically update the main section for the searched city
            const cityNameElement = document.getElementById('cityName');
            if (cityNameElement) cityNameElement.innerHTML = city;

            document.title = `Weather in ${city}`;

            document.getElementById('temp').innerHTML = `${kelvinToFahrenheit(data.main.temp)} °F`;
            document.getElementById('temp_min').innerHTML = `${kelvinToFahrenheit(data.main.temp_min)} °F`;
            document.getElementById('temp_max').innerHTML = `${kelvinToFahrenheit(data.main.temp_max)} °F`;
            document.getElementById('feels_like').innerHTML = `${kelvinToFahrenheit(data.main.feels_like)} °F`;
            document.getElementById('humidity').innerHTML = `${data.main.humidity}%`;
            document.getElementById('wind_speed').innerHTML = `${data.wind.speed} miles/s`;
            document.getElementById('sunrise').innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('sunset').innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Fetch Chicago and London weather details on page load
    fetchWeather('Chicago');
    fetchWeather('London');

    // Add search functionality
    const searchButton = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            alert('Please enter a valid city name!');
        }
    });
});
