import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

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
          alert("Please choose a date in the future")
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
  
  
    
    // inputDays.innerHTML = addLeadingZero(days);
    // inputHour.innerHTML = addLeadingZero(hours);
    // inputMinute.innerHTML = addLeadingZero(minutes);
    // inputSeconds.innerHTML = addLeadingZero(seconds);
    return  { days, hours, minutes, seconds }; 
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
      alert('Time is out!');
      button.disabled = false;
      inputTime.disabled = false;
      return;
    }
  }, 1000);
}
