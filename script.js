// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");
const date = document.getElementById("date");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const moonrise = document.getElementById("moonrise");
const moonset = document.getElementById("moonset");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter The City Name: ");
        return;
    }

    const city = inputBox.value

     // Fetch Details

     const fetchData = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=370b459af275478ebb055128231705&q=${city}`
     )

     const orgData = await fetchData.json();
     data = orgData;
    //  console.log(data.forecast.forecastday[0].astro.sunrise);

      // Displaying the data in HTML

      countryName.innerHTML = data.location.country;
      stateName.innerHTML   = data.location.region;
      cityName.innerHTML    = data.location.name;
      humidity.innerHTML    = data.current.humidity;
      windSpeed.innerHTML   = data.current.wind_kph;
      temprature.innerHTML  = data.current.temp_c;
      logoImage.src         = data.current.condition.icon;
      weatherStatus.innerHTML = data.current.condition.text;
      date.innerHTML          = data.forecast.forecastday[0].date;
      sunrise.innerHTML       = data.forecast.forecastday[0].astro.sunrise;
      sunset.innerHTML        = data.forecast.forecastday[0].astro.sunset;
      moonrise.innerHTML       = data.forecast.forecastday[0].astro.moonrise;
      moonset.innerHTML        = data.forecast.forecastday[0].astro.moonset;

}