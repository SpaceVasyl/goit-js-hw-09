const delayInput = document.querySelector('.form');
const promiseButton = document.querySelector('button');
const obj = {};
delayInput.addEventListener("input", inputObj);
function inputObj(event) {
  obj[event.target.name] = event.target.value;
};
promiseButton.addEventListener("click", formHandler);

function formHandler(event) {
  event.preventDefault();
  const { amount, delay, step } = obj;
  consoleLog(obj);
}

function consoleLog(some) {
  console.log(some.delay);
}
