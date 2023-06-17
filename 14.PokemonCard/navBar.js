const $toggleButton = document.querySelector('.toggleButton');
const $container = document.querySelector('.container');
const $list = document.querySelectorAll('.list');

$toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    $container.classList.toggle('open');
})