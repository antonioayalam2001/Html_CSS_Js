const $menuToggle = document.querySelector('.menuToggle');
const $navigation = document.querySelector('.navigation');
const $list = document.querySelectorAll('.list');

$menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    $navigation.classList.toggle('open');
})

function activeLink(e)  {
    e.preventDefault();
    $list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}

$list.forEach(item=>{
    item.addEventListener('click',activeLink);
})