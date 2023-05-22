const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', OnInputValidation)

function OnInputValidation() {

    inputEl.classList.remove('valid', 'invalid') // без цього не змінюється колір бордера, бо після декількох дій, стає два класи і valid та invalid,  стилі перебиваються, можливо є краще рішення, ніж моє, якщо так, то буду вдячний за пояснення
    inputEl.classList.add((inputEl.value.length >= 6) ? 'valid' : 'invalid')

}
