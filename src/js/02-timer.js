import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const inputTime = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
button.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(inputTime, options);

inputTime.addEventListener("input", timeIsMoney);
function timeIsMoney(event) {
    button.disabled = false;
    console.dir();
}

