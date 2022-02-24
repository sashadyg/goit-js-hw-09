import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const inputDataRef = document.querySelector('input')
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { },
  onChange: function (selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      window.alert("Please choose a date in the future")
      startBtnRef.setAttribute('disabled', 'true')
      
    } else {
      startBtnRef.removeAttribute('disabled')
  }
  }
};
const fp = flatpickr(inputDataRef, options)
const startBtnRef = document.querySelector('button[data-start]')

startBtnRef.addEventListener('click', startOfTimer)

function startOfTimer(e) {
  updatePerSec()
}

function updatePerSec() {
    const timerId = setInterval(differentsOfTime, 1000);    
}


function differentsOfTime() {
  const selectedDate = fp.selectedDates[0].getTime()
  const nowDate = new Date()
  const gap = selectedDate - nowDate.getTime()
  if (gap <= 0) {
    window.alert("Please choose a date in the future")
  }
    
  return gap
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