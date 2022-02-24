import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDataRef = document.querySelector('input')
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { },
  onChange: function (selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtnRef.setAttribute('disabled', 'true')
      
    } else {
      startBtnRef.removeAttribute('disabled')
  }
  }
};
const fp = flatpickr(inputDataRef, options)
const startBtnRef = document.querySelector('button[data-start]')
const daysRef = document.querySelector('span[data-days]')
const hoursRef = document.querySelector('span[data-hours]')
const minRef = document.querySelector('span[data-minutes]')
const secRef = document.querySelector('span[data-seconds]')

startBtnRef.addEventListener('click', updatePerSec)

function updatePerSec() {
  const timerId = setInterval(differentsOfTime, 1000);
}


function differentsOfTime() {
  const selectedDate = fp.selectedDates[0].getTime()
  const nowDate = new Date()
  const gap = selectedDate - nowDate.getTime()
  const convertedTime = convertMs(gap)

  daysRef.textContent = convertedTime.days
  hoursRef.textContent = convertedTime.hours
  minRef.textContent = convertedTime.minutes
  secRef.textContent = convertedTime.seconds
}

function pad(value) {
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}