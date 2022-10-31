"use strict";
function useFatch(){
  const url =
"http://api.weatherapi.com/v1/current.json?key=89989e85f61749d6840135231222510&q=Gazipur&aqi=yes";


fetch(url).then(response => response.json()).then(data=> {
   data.forEach((value) => {
    latitude = value.latitute;
    longitude = value.longitude;
    // my
   })
})
}
const days = document.getElementById("days");
const dateTime = document.getElementById("dateTime");
function thisDay() {
  const thisDay = new Date();
  const day = thisDay.getDay();
  const date = thisDay.getDate();
  const month = thisDay.getMonth() + 1;
  const year = thisDay.getFullYear();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  days.innerText = weekday[day];
  dateTime.innerText = `${date}/${month}/${year}`
}
thisDay();
