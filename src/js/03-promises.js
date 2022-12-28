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
  for (let i = 1; i <= obj.amount; i++) {
    if (i <= obj.amount) {
        createPromise(obj.amount, obj.delay, obj.step).then(({ position, delay, step }) => {
          console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
          console.log(step);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${i} in ${delay}ms`);
        });
    }
  }
}
function createPromise(position, delay, step) {
    return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay, step});
      }
        reject({position, delay, step});
      }, Number(obj.step));
  })
}



  
  
