
import flatpickr from "flatpickr";
// Additional styles import
import "flatpickr/dist/flatpickr.min.css";

let timerEl = document.querySelector(".timer")
let divEl = document.querySelector(".field")
let inputEl = document.querySelector('#datetime-picker')
let daysEl = document.querySelector("[data-days]")
let hoursEl = document.querySelector("[data-hours]")
let minutesEl = document.querySelector("[data-minutes]")
let secondsEl = document.querySelector("[data-seconds]")
let startButtonEl = document.querySelector("[data-start]")
timerEl.style.display = "flex";
timerEl.style.justifyContent = "space-evenly";



const fp = flatpickr(inputEl, {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
        startButtonEl.setAttribute('disabled', '');
        alert("Please choose a date in the future");
    }
    else {
        startButtonEl.removeAttribute('disabled', '');
        let convertedDateMs = selectedDates[0].getTime()
        let difference = (convertedDateMs - new Date().getTime())
        let convertedDateDisplay = (convertMs(difference))
        daysEl.innerText = addLeadingZero(convertedDateDisplay.days)
        hoursEl.innerText = addLeadingZero(convertedDateDisplay.hours);
        minutesEl.innerText = addLeadingZero(convertedDateDisplay.minutes);
        secondsEl.innerText = addLeadingZero(convertedDateDisplay.seconds)
    };
    },
});


function addLeadingZero(value) {
    if (value.length = 1) {
    return value.toString().padStart(2, "0")
}
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
let timerId
const handleClick = function countDown() {
    let date = fp.latestSelectedDateObj.getTime()
    let d = new Date().getTime()
    timerId = setInterval(() => {
        if ((date - d) > 0) {
            let counter = (date - d) - 1000;
            let convertedDateDisplay = (convertMs(counter))
            console.log(counter)
        daysEl.innerText = addLeadingZero(convertedDateDisplay.days)
        hoursEl.innerText = addLeadingZero(convertedDateDisplay.hours);
        minutesEl.innerText = addLeadingZero(convertedDateDisplay.minutes);
        secondsEl.innerText = addLeadingZero(convertedDateDisplay.seconds);
            
        }
        
    }, 1000);
    
}
startButtonEl.addEventListener("click", (handleClick))
