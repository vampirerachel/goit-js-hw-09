let formEl = document.querySelector(".form")
let firstDelay = document.querySelector('input[name="delay"]')
let delayStep = document.querySelector('input[name="step"]')
let amount = document.querySelector('input[name="amount"]')

function handleSubmit(e) {
  e.preventDefault() 
  
  for (let i = 1; i <= amount.value; i++) {
    console.log(firstDelay.value)
    createPromise(i, firstDelay.value).then(({ position, delay }) => {
      setTimeout(() => {console.log(`the position is ${position} and the value is ${delay}`)}, firstDelay.value);
});

  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill 
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
}


formEl.addEventListener("submit", handleSubmit)