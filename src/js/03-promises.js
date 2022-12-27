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
  createPromise(obj.amount, obj.delay)
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  if (shouldResolve) {
    resolve("Success! Value passed to resolve function");
  } else {
    reject("Error! Error passed to reject function");
  }
    }, obj.delay);
});
}
