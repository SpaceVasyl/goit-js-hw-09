import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let timerCountdown = null;
const inputTime = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
const inputDays = document.querySelector('[data-days]')
const inputHour = document.querySelector('[data-hours]')
const inputMinute = document.querySelector('[data-minutes]')
const inputSeconds = document.querySelector('[data-seconds]')
button.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < options.defaultDate.getTime()) {
        Notiflix.Notify.failure("Please choose a date in the future");
      }
      else {
        timerCountdown = selectedDates[0] - options.defaultDate.getTime();
        button.disabled = false;
      }
  },
};
flatpickr(inputTime, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    addLeadingZero({ days, hours, minutes, seconds }); 
}
function addLeadingZero(value) {
  const timerParam = Object.values(value);
  const timerParamToString = timerParam.map(timerParam => timerParam.toString().padStart(2, '0'));
  inputDays.innerHTML = timerParamToString[0];
  inputHour.innerHTML = timerParamToString[1];
  inputMinute.innerHTML = timerParamToString[2];
  inputSeconds.innerHTML = timerParamToString[3];
}
button.addEventListener('click', timerCounting);
function timerCounting(event) {
  button.disabled = true;
  inputTime.disabled = true;
  timerId = setInterval(() => {
    timerCountdown = timerCountdown - 1000;
    convertMs(timerCountdown);
    if (timerCountdown <= 0) {
      clearInterval(timerId);
      Notiflix.Notify.failure('Time is out!');
      button.disabled = false;
      inputTime.disabled = false;
      return;
    }
  }, 1000);
}