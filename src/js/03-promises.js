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
  createPromise()
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        promise.then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
      } else {
        promise.catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      
      }
    }, obj.position)
  })
}