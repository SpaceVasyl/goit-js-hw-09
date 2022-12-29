const inputTime = document.querySelector("#datetime-picker");
const button = document.querySelector("button");


// button.addEventListener("click", timeIsMoney);
// function timeIsMoney(event) { 
// }
const date1 = Date.now();
setTimeout(() => {
    const date2 = Date.now();
        console.log('date1', date1);
        console.log('date2', date2);
        console.log(date2 - date1);
    }, 3000);

const timer = {
    start(){}
}