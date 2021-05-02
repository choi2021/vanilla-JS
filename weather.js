const weatherContainer = document.querySelector(".js-weather");

const API_KEY = `883f192704568f81e08ccd7d56a18e78`;
const POSITION_LS = "Location";

function showWeather(temp, name) {
    const span = document.createElement("span");
    span.innerText = `${temp}°C @ ${name}`;
    weatherContainer.appendChild(span);
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) =>showWeather(data.main.temp,data.name));
}

function saveObj(obj) {
    localStorage.setItem(POSITION_LS, JSON.stringify(obj));
}

function successLocation(location) {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    getWeather(latitude, longitude);
    const coordsObj = {
        latitude,
        longitude
    }
    saveObj(coordsObj);
}

function errorLocation() {
    const error = new Error("Your loation has not found!");
    throw error;
}

function askForLocation() {
    const location = navigator.geolocation;
    location.getCurrentPosition(successLocation,errorLocation);
}

function init() {
    const loadedPosition = localStorage.getItem(POSITION_LS);
    if (loadedPosition === null) {
        askForLocation();
    } else {
        const parsePosition = JSON.parse(loadedPosition);
        getWeather(parsePosition.latitude, parsePosition.longitude);
    }
}

init();