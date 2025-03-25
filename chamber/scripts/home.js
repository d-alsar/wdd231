const yearElement = document.querySelector("#currentYear");
const currentYear = new Date().getFullYear();

// This creates a copyright symbol element
const copyrightSymbol = document.createTextNode("© ");

// This adds the copyright symbol and year to the span element
yearElement.appendChild(copyrightSymbol);
yearElement.appendChild(document.createTextNode(currentYear));


const today = new Date();
const dayElement = document.querySelector("#lastModified");

dayElement.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
}).format(today)}</span>`;

{/* <div class="card">
<h2 id="town"></h2>
<img id="weather-icon" src="" alt="">
<p id="temperature"></p>
<p id="description"></p>
<p id="humidity"></p>
<p id="wind"></p> */}

// select HTML elements in the document (for weather API)
const myTown = document.querySelector('#town');
const myTemperature = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');


const todayTemp = document.querySelector('#today');
const wednesdayTemp = document.querySelector('#wednesday');
const thursdayTemp = document.querySelector('#thursday');

const myKey = '320d87ece56bdd3175fb11b5bc36dbb3';
const myLat = '13.693941038764232';
const myLon = '-89.21514553347922';

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;


async function apiFetch() {
    try {
        // Fetch both weather and forecast data simultaneously
        const [response, forecastResponse] = await Promise.all([
            fetch(myURL),
            fetch(forecastURL)
        ]);

        if (!response.ok || !forecastResponse.ok) {
            throw Error("One or both API requests failed.");
        }

        const currentData = await response.json();
        const forecastData = await forecastResponse.json();

        console.log("Current Weather Data:", currentData);
        displayResults(currentData);
        console.log("hello"); // Testing that displayResults runs

        console.log("Forecast Data:", forecastData);
        displayForecast(forecastData);
        console.log("forecast"); // Testing that displayForecast runs

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    myTown.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('ALT', data.weather[0].description);

    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    wind.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
}

function displayForecast(data) {
    const today = new Date().getDay(); // Current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const forecastTemps = {};

    // Loop through forecast list to extract relevant temperatures
    data.list.forEach(entry => {
        const entryDate = new Date(entry.dt * 1000);
        const entryDay = entryDate.getDay();
        
        // Store the first temperature found for each required day
        if (!forecastTemps[entryDay]) {
            forecastTemps[entryDay] = entry.main.temp;
        }
    });

    // Display temperatures (if available)
    todayTemp.innerHTML = `Today: ${data.list[9].main.temp}&deg;C`;
    wednesdayTemp.innerHTML = `Wednesday: ${data.list[17].main.temp}&deg;C`
    thursdayTemp.innerHTML = `Thursday: ${data.list[25].main.temp}&deg;C`
}

// Call the function to fetch both data sets
apiFetch();
