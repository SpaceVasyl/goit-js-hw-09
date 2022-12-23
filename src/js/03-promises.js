const delayInput = document.querySelector(['delay']);
delayInput.addEventListener("input", (event) => {
 console.log(event.currentTarget.value);
});
const promiseButton = document.querySelector('button');
promiseButton.addEventListener("click", () => {
  
  // function createPromise(position, delay) {
  //   const shouldResolve = Math.random() > 0.3;
  //   if (shouldResolve) {
  //     // Fulfill
  //   } else {
  //     // Reject
  //   }
  // }
});
