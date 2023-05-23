const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputValidation)

function onInputValidation() {

    inputEl.classList.remove('valid', 'invalid') // без цього не змінюється колір бордера, бо після декількох дій, стає два класи і valid та invalid,  стилі перебиваються, можливо є краще рішення, ніж моє, якщо так, то буду вдячний за пояснення
    inputEl.classList.add((inputEl.value.length === Number(inputEl.dataset.length)) ? 'valid' : 'invalid')

}
