const goToRegister = document.querySelector(".register__link");
const goToLogin = document.querySelector(".login__link");
const container = document.querySelector(".form__container");

goToLogin.addEventListener('click', () => {
    container.classList.add('sign__inForm');
})

goToRegister.addEventListener('click', () => {
    container.classList.remove('sign__inForm');
})