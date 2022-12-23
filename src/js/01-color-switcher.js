
const elementBody = document.querySelector("body");
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let timerNumb = null;
let timerActive = false;
startButton.addEventListener("click", () => {
    event.preventDefault();
    if (timerActive === true) {
        return
    }
    timerActive = true;
    timerNumb = setInterval(() => {
        elementBody.style.backgroundColor = getRandomHexColor();
        }, 1000);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}
stopButton.addEventListener("click", () => {
    event.preventDefault();
    clearInterval(timerNumb);
    timerActive = false;
});

