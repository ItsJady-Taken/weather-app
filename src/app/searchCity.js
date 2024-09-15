const clear = require('../images/clear.png');
const sunNcloud = require('../images/sunNcloud.png');
const rain = require('../images/rain.png');

const searchCity = document.getElementById('search-city');
function validValue(value) {
    if (value === '') {
        searchCity.style.borderBottom = '1px solid red';
        return;
    }
    else {
        getWeather(value);
        searchCity.style.borderBottom = '1px solid white';
    }
}

async function getWeather(location) {   
    const api_key = '2ESZSQBWX67WJCYXUJZ5CAQ3H';
    const weather_http = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=`;

    try {
        const response = await fetch(`${weather_http}${api_key}`);
        if (!response.ok) {
            throw new Error(`Location not found: ${location}`);
        }
        const data = await response.json();
        console.log(data.days[0]);
    
        getWeatherIcon(data);
        showWeather(data.address, data.days[0].temp, data.days[0].windspeed, data.days[0].humidity);
    }
    catch (error) {
        alert(error.message);
        searchCity.style.borderBottom = '1px solid red';;
    }
    
   
}

function removeFirstChild(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const place = document.getElementById('weather-city');
const temp = document.getElementById('weather-temperature');
const windspeed = document.getElementById('weather-wind');
const humid = document.getElementById('weather-humidity');
function showWeather(location, tempre, wind, humidity) {
    tempre = Math.floor((tempre - 32) * 5 / 9);
    wind = Math.floor(wind);
    humidity = Math.floor(humidity);

    place.textContent = location.toUpperCase();
    temp.textContent = `${tempre}°C`;
    windspeed.textContent = `${wind}km/h Wind`;
    humid.textContent = `${humidity}% Humidity`;

}

function getWeatherIcon(data) {
    const imageDiv = document.getElementById('image-content');
    removeFirstChild(imageDiv);
    const ImageElement = document.createElement('img');

    if (data.days[0].icon === "partly-cloudy-day") {
        ImageElement.src = sunNcloud;
    }
    else if (data.days[0].icon === "rain") {
        ImageElement.src = rain;
    }
    else if (data.days[0].icon === "clear-day") {
        ImageElement.src = clear;
    }
    
    imageDiv.appendChild(ImageElement);
}

export { validValue }