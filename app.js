/*jshint esversion: 6*/
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const slider = document.querySelector('.slider');
const slidesCount = slider.querySelectorAll('div').length;

sidebar.style.top = `${-(slidesCount-1) * 100}vh`;

btnUp.addEventListener('click', () => {
    changeSlide('up');
});
btnDown.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown')
    changeSlide('down');
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp')
    changeSlide('up');
});

let activeSlideIndex = 0;

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = (slidesCount - 1);
        }
    }

    const heigth = container.clientHeight;
    slider.style.transform = `translateY(-${activeSlideIndex * heigth}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * heigth}px)`;
}