const reloadButton = document.querySelector(".reload-button")
const windSpeed = document.querySelector(".weather-wind")
const city = document.querySelector(".weather-city")
const dataDate = document.querySelector(".secondary-info__data")
const dataTime = document.querySelector(".secondary-info__time")
const dataTimeMain = document.querySelector(".main-info__time")
const degree = document.querySelector(".degrees")
const feelsLike = document.querySelector(".feels-like")
const weatherSky = document.querySelector(".weather-sky")
const sunRise = document.querySelector(".sun-rissing")
const humidity = document.querySelector(".humidity")
const pressure = document.querySelector(".pressure")
const API_KEY = "036a41a95c948f327b370fb6606eaed3";
const LAT = 52.2297;
const LON = 21.0122;
const FETCH_RESPONSE = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=ua&appid=${API_KEY}`;

async function fetchWeather() {
    try{
        const response = await fetch(FETCH_RESPONSE)
        if(response.ok){
            const data = await response.json()
            console.log(data)
            renderWeather(data)
        }else{
            throw Error("status: " + response.status)
        }
    }catch(e){
        console.log(e)
    }
}
reloadButton.addEventListener("click",function(e){
    e.preventDefault()
    fetchWeather()
})
function renderWeather(dataResponse){
    const weekday = ["Sunday","Mn","Tue","Wed","Thursday","Fr","Sat"];
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const date = new Date();
    let month = monthNames[date.getMonth()];
    let day = weekday[date.getDay()];
    city.textContent = `${dataResponse.name}, ${month} ${date.getDate()},${date.getFullYear()} - ${day}`;
    windSpeed.textContent = `Wind: ${dataResponse.wind.speed.toFixed(0)} km/ SSE`;
    dataDate.textContent = `${month} ${date.getDate()}`;
    dataTime.textContent = getTimeWithAmPm();
    dataTimeMain.textContent = getTimeWithAmPm();
    degree.textContent = `${dataResponse.main.temp.toFixed(0)}°C`;
    feelsLike.textContent = `Feels Like: ${dataResponse.main.feels_like.toFixed(0)}°C`;
    weatherSky.textContent = dataResponse.weather[0].main;
    const sunriseTimestamp = dataResponse.sys.sunrise;
    const sunriseTime = new Date(sunriseTimestamp * 1000); 
    const sunriseHours = sunriseTime.getHours().toString().padStart(2, '0');
    const sunriseMinutes = sunriseTime.getMinutes().toString().padStart(2, '0');
    sunRise.textContent = `🕤 SUN ${sunriseHours}:${sunriseMinutes} AM`;
    humidity.textContent = `Humidity: ${dataResponse.main.humidity}%`
    pressure.textContent = `Pressure: ${dataResponse.main.pressure} hPa`
}

function getTimeWithAmPm() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12 || 12; 
  
    return `${hours}:${minutes} ${amPm}`;
  }