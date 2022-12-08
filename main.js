/**************** Timer ****************/
//DOM connections:
const monthes = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const ramadanTime = "March 22, 2023";
const ramadanMonth = new Date(ramadanTime);

function getTime() {
  const thisMonth = new Date();
  let Seconds = Math.floor((ramadanMonth - thisMonth) / 1000);
  let Days = Seconds / 86400;

  let leftSeconds = Seconds % 60;
  let leftMinutes = Math.floor((Seconds / 60) % 60);
  let leftHours = Math.floor((Seconds / 3600) % 24);
  let leftDays = Math.floor(Days % 30);
  let leftMonthes = Math.floor(Days / 30.417);

  monthes.textContent = formatTime(leftMonthes);
  days.textContent = formatTime(leftDays);
  hours.textContent = formatTime(leftHours);
  minutes.textContent = formatTime(leftMinutes);
  seconds.textContent = formatTime(leftSeconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(getTime, 1000);
