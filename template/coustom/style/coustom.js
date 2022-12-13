"use strict";
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
