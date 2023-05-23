const formEl = document.querySelector('.login-form')
const emailInputEl = formEl.firstElementChild.firstElementChild
const passwordInputEl = formEl.lastElementChild.previousElementSibling.firstElementChild

const formData = {}
formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    if (emailInputEl.value === "" || passwordInputEl.value === "") {
        window.alert("Заповніть всі поля, будь ласка!")
    }
    else {
        formData[emailInputEl.name] = emailInputEl.value
        formData[passwordInputEl.name] = passwordInputEl.value

        console.log(formData)
        formEl.reset()
 }
}
