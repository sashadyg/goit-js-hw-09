const startBtnRef = document.querySelector('button[data-start]')
const stopBtnRef = document.querySelector('button[data-stop]')
const bodyRef = document.querySelector('body')
let timerId = null

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtnRef.addEventListener('click', startSwitchColor)
stopBtnRef.addEventListener('click', stopSwitchColor)

function startSwitchColor() {
    startBtnRef.setAttribute('disabled', 'true')
    stopBtnRef.removeAttribute('disabled')
    timerId = setInterval(() => 
        bodyRef.style.backgroundColor = getRandomHexColor(), 1000)
}

function stopSwitchColor() {
    stopBtnRef.setAttribute('disabled', 'true')
    startBtnRef.removeAttribute('disabled')
    clearInterval(timerId)
}