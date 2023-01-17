
const elementBody = document.querySelector("body");
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let timerNumb = null;
stopButton.disabled = true;
const timerActive = false;
startButton.addEventListener("click", () => {
    elementBody.style.backgroundColor = getRandomHexColor();
    startButton.disabled = true;
    stopButton.disabled = false;
    timerActive = true;
    timerNumb = setInterval(() => {
        elementBody.style.backgroundColor = getRandomHexColor();
        console.log("assad");
        }, 1000);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}
stopButton.addEventListener("click", () => {
    clearInterval(timerNumb);
    startButton.disabled = false;
    stopButton.disabled = true;
});

