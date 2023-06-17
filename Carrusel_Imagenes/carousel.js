const buttons = document.querySelectorAll('button');
const container = document.querySelectorAll('.carousel__container .slide');
const rightButton = buttons[0];
const leftButton = buttons[1];
const sliderLength = 5;
let current = 0;
let next = 1;
let prev = 4;
rightButton.addEventListener('click', () => {
    console.log(current)

    if (current < 4) {
        toSlide(current + 1);
    } else {
        toSlide(0);
    }
})

function toSlide(number) {
    current = number;
    prev = current - 1;
    next = current + 1;


    for (let i = 0; i < 5; i++) {
        container[i].classList.remove('active');
        container[i].classList.remove('prev');
        container[i].classList.remove('next');
    }

    if (next===5) next=0;
    if (prev === -1) prev = 4;

    container[current].classList.add('active');
    container[prev].classList.add('prev');
    container[next].classList.add('next');

}

leftButton.addEventListener('click', () => {
    console.log(current)
    if (current > 0) {
        toSlide(current - 1);
    } else {
        toSlide(sliderLength - 1);
    }
})

