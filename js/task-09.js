function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtnEl = document.querySelector('.change-color')
const colorOutputEl = document.querySelector('.color')
const body = document.querySelector('body')

colorBtnEl.addEventListener('click', () => {
  colorOutputEl.textContent = getRandomHexColor()
  body.style.backgroundColor = `${getRandomHexColor()}`
})
