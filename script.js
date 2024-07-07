const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "0318b21fe0c0ad7d4d2c4c74d1e7df49";

defaultcity();

const temp = document.querySelector(".temp");
const cityname = document.querySelector(".cityname");
const searchBtn = document.querySelector(".searchbtn");
const subBtn = document.querySelector("button");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector("#wind");
const wicon = document.querySelector(".wicon");

searchBtn.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    city = searchBtn.value;
    console.log(city);
    return checkWeather(city);
  }
});

async function defaultcity() {
  try {
    let data = await fetch(url + "new york" + "&appid=" + key);
    let res = await data.json();
    result = res;
    cityname.innerHTML = "New York";
    console.log(result);
    temp.innerHTML = Math.round(result.main.temp) + "`o C";
    humidity.innerHTML = Math.round(result.main.humidity) + "%";
    wind.innerHTML = result.wind.speed + " km/h";
  } catch (e) {
    console.log("Error" + e);
  }
}

subBtn.addEventListener("click", () => {
  city = searchBtn.value;
  console.log(city);
  return checkWeather(city);
});

async function checkWeather(cityarg) {
  try {
    let data = await fetch(url + cityarg + "&appid=" + key);
    let res = await data.json();
    result = res;
    cityname.innerHTML = result.name;
    console.log(result);
    temp.innerHTML = Math.round(result.main.temp) + "`o C";
    humidity.innerHTML = Math.round(result.main.humidity) + "%";
    wind.innerHTML = result.wind.speed + " km/h";
  } catch (e) {
    console.log("Error" + e);
    cityname.innerHTML = "Wrong City Name";
    temp.innerHTML = "";
    humidity.innerHTML = "";
    wind.innerHTML = "";
  }
}
