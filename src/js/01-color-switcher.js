const startEl = document.querySelector('[data-start]')
const stopEl = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')

let timerId = null;

let handleStart = function getRandomHexColor() {
    timerId = setInterval(() => {
    bodyEl.style.backgroundColor=`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}, 1000);
    startEl.setAttribute('disabled', '');
}

let handleStop = function stopFunction() {
    clearInterval(timerId);
    startEl.removeAttribute('disabled', '');
}
startEl.addEventListener("click", handleStart)
stopEl.addEventListener("click", handleStop)
