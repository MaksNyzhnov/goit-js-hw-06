const rangeEl = document.querySelector('#font-size-control')
const phraseEl = document.querySelector('#text')

rangeEl.addEventListener('input', inputHandler)

function inputHandler() {

    phraseEl.style.fontSize = `${rangeEl.value}px`
}
