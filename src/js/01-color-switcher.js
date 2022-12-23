// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
startButton.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
    console.log("press start");
}

stopButton.addEventListener("click", clickButton);

function clickButton(event) {
    event.preventDefault();
    console.log("press stop");
}
