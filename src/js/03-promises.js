
let formEl = document.querySelector(".form")
let firstDelay = document.querySelector('input[name="delay"]')
let delayStep = document.querySelector('input[name="step"]')
let amount = document.querySelector('input[name="amount"]')


function handleSubmit(e) {
  e.preventDefault();
  for (let i = 0; i < amount.value; i++){
    createPromise(i, firstDelay.value)
      .then((position, delay) => {
        setTimeout(() => {
          console.log('(✅ Fulfilled promise) the position is ${position} and the value is ${delay}'
          );
        }, delayStep);
      })
      .catch((position, delay) => { 
        setTimeout(() => {
          console.log(`(❌ Rejected promise)the position is ${position} and the value is ${delay}`
          );
        }, delayStep);
    })
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formEl.addEventListener("submit", handleSubmit)
