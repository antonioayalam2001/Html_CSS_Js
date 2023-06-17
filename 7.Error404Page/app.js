const $navToggle = document.querySelector('.nav__toggle');
const $closeButton = document.querySelector('.nav__close');
const $navMenu = document.querySelector('.nav__menu');
const $menuItems = document.querySelectorAll('.nav__item');


$navToggle.addEventListener('click', () => {
    $navMenu.classList.add('active');
});

$closeButton.addEventListener('click', () => {
    $navMenu.classList.remove('active');
})

// Removing Menu when click on any option
function removeMenu() {
    $navMenu.classList.remove('active');
}

$menuItems.forEach(item=>item.addEventListener('click',removeMenu));