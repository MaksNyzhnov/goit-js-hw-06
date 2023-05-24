function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsContainerEl = document.querySelector('#controls')
const inputEl = controlsContainerEl.firstElementChild
const createBtnEl = inputEl.nextElementSibling
const destroyBtnEl = controlsContainerEl.lastElementChild
const boxContainerEl = document.querySelector('#boxes')


createBtnEl.addEventListener('click', createBoxes)
destroyBtnEl.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  amount = inputEl.value
  const boxes = [];
  for (let i = 1; i <= amount; i++) {
  const boxEl = document.createElement('div')
  boxEl.style.width = `${20 + 10 * i}px`
  boxEl.style.height = `${20 + 10 * i}px`
  boxEl.style.borderRadius = "25%"
  boxEl.style.backgroundColor = `${getRandomHexColor()}`
    boxes.push(boxEl)
  }
  boxContainerEl.append(...boxes)
  console.log(boxes)
  console.log(boxContainerEl)
} 

function destroyBoxes() {
  boxContainerEl.innerHTML = ''
}
