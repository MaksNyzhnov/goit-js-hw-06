const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')


inputEl.addEventListener('input', inputTypingHandler)

function inputTypingHandler() {
    outputEl.textContent = inputEl.value
    
    if (inputEl.value === '') {
        outputEl.textContent = "Anonymous"
    }
}