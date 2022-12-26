const delayInput = document.querySelector('.form');

const obj = {};
delayInput.addEventListener("input", (event) => {
  obj[event.target.name] = event.target.value;

});
const promiseButton = document.querySelector('button');
promiseButton.addEventListener("click", createPromise(obj.position, obj.delay));
function createPromise(position, delay) {
  console.log(obj);
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      console.log(obj);
    } else {
      console.log(obj);
    }
  }