const API_KEY ="15f88eaf631746bd32fc713337bd5c9d";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
     
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
    const weather =document.querySelector("#weather span:first-child");
    const city =document.querySelector("#weather span:last-child");
       weather.innerText =data.weather[0].main;
       city.innerText =data.name;
    }); 
    } 

function onGeoError(){
alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition( onGeoOk, onGeoError );
