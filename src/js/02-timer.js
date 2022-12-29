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
        convertMs(timerCountdown);
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
    console.log({ days, hours, minutes, seconds });
    return { days, hours, minutes, seconds };
    
}

