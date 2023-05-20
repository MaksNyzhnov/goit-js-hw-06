let counterValue = 0;

const counterEl = document.querySelector('#counter')
const decrementbtnEl = counterEl.firstElementChild
const inctrementbtnEl = counterEl.lastElementChild
const counterOutput = document.querySelector('#value')

decrementbtnEl.addEventListener('click', onDecrementClick)
inctrementbtnEl.addEventListener('click', onIncrementClick)

function onDecrementClick() {
    counterValue += -1;
    counterOutput.textContent = counterValue;
}
function onIncrementClick() {
    counterValue += 1;
    counterOutput.textContent = counterValue
}