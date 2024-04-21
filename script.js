const divEle = document.querySelector(".card-container");
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let overallSeconds = 0;
let seconds = 0;
let min = 0;
let hour = 0;

timerElement.textContent = "00 : 00 : 00";

document.addEventListener("DOMContentLoaded", () => {
  stopButton.disabled = true;
  stopButton.classList.remove("button_hover");
  resetButton.disabled = true;
  resetButton.classList.remove("button_hover");
});

function startTimer() {
  timer = setInterval(() => {
    ++overallSeconds;
    hour = Math.floor(overallSeconds / 3600);
    min = Math.floor((overallSeconds - hour * 3600) / 60);
    seconds = overallSeconds - (hour * 3600 + min * 60);

    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (seconds < 10) seconds = "0" + seconds;

    timerElement.textContent = `${hour} : ${min} : ${seconds}`;
  }, 1000);
}

startButton.addEventListener("click", () => {
  startTimer();
  startButton.disabled = true;
  startButton.classList.remove("button_hover");
  startButton.textContent = "Start";
  stopButton.disabled = false;
  stopButton.classList.add("button_hover");
  resetButton.disabled = false;
  resetButton.classList.add("button_hover");
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
  startButton.disabled = false;
  startButton.classList.add("button_hover");
  startButton.textContent = "Resume";
  stopButton.disabled = true;
  stopButton.classList.remove("button_hover");
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  overallSeconds = 0;
  seconds = 0;
  min = 0;
  hour = 0;
  timerElement.textContent = "00 : 00 : 00";
  startButton.disabled = false;
  startButton.classList.add("button_hover");
  startButton.textContent = "Start";
  stopButton.disabled = true;
  stopButton.classList.remove("button_hover");
  resetButton.disabled = true;
  resetButton.classList.remove("button_hover");
});
