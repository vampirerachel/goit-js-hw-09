
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
            let selectedDate = selectedDates[0].getTime()
            let currentDate = new Date().getTime()
            let dateDiff = selectedDate - currentDate
            if ((dateDiff) > 0) {
                let convertedDateDisplay = (convertMs(dateDiff))
                daysEl.innerText = addLeadingZero(convertedDateDisplay.days)
                hoursEl.innerText = addLeadingZero(convertedDateDisplay.hours);
                minutesEl.innerText = addLeadingZero(convertedDateDisplay.minutes);
                secondsEl.innerText = addLeadingZero(convertedDateDisplay.seconds);
            };
        }
    }
});



function addLeadingZero(value) {
    let stringValue = value.toString();
    if (stringValue.length = 1) {
    return stringValue.padStart(2, "0")
}
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
let timerId
const handleClick = function countDown() {

    timerId = setInterval(() => {


    let selectedDate = fp.latestSelectedDateObj.getTime()
    let currentDate = new Date().getTime()
        let dateDiff = selectedDate - currentDate
        

        if ((dateDiff) > 0) {
            let convertedDateDisplay = (convertMs(dateDiff))
        daysEl.innerText = addLeadingZero(convertedDateDisplay.days)
        hoursEl.innerText = addLeadingZero(convertedDateDisplay.hours);
        minutesEl.innerText = addLeadingZero(convertedDateDisplay.minutes);
        secondsEl.innerText = addLeadingZero(convertedDateDisplay.seconds);
            
        }else {
            clearInterval(timerId)
            alert('the time is over')
        }
        
    }, 1000)
    }
    

    startButtonEl.addEventListener("click", (handleClick));
