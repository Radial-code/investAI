// nav bar
const navigation = document.getElementById("nav");
const changeButton = document.getElementById("change");

function toggleNavigationMenu() {
  navigation.classList.toggle("show");
  document.body.classList.toggle("overflow_hidden");
  changeButton.classList.toggle("change");
}

// counter
function startTimer(days, hours, minutes, seconds) {
  let totalSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  let daysDisplay = document.getElementById("days");
  let hoursDisplay = document.getElementById("hours");
  let minutesDisplay = document.getElementById("minutes");
  let secondsDisplay = document.getElementById("seconds");
  let timerInterval = setInterval(function () {
    let days = Math.floor(totalSeconds / (3600 * 24));
    let hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);
    daysDisplay.textContent = days < 10 ? "0" + days : days;
    hoursDisplay.textContent = hours < 10 ? "0" + hours : hours;
    minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
    if (--totalSeconds < 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
startTimer(10, 10, 15, 15);
