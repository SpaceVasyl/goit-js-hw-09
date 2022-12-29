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
      console.log(options.defaultDate.getTime());
      if (selectedDates[0] < options.defaultDate.getTime()) {
          window.alert("Please choose a date in the future")
      }
  },
};
flatpickr(inputTime, options);

inputTime.addEventListener("input", timeIsMoney);
function timeIsMoney(event) {
    console.dir();
}

