// Раскрывающееся меню navbar

const menuBody = document.querySelectorAll('.menu');

document.addEventListener('click', menu);

function menu (event) {
    if (event.target.closest('.menu__button') && event.clientX > menuBody[0].offsetLeft && event.clientX < (menuBody[0].offsetLeft + menuBody[0].offsetWidth)) {
        menuBody[0].classList.toggle('_active');
    }
    if (event.target.closest('.menu__button') && event.clientX > menuBody[1].offsetLeft && event.clientX < (menuBody[1].offsetLeft + menuBody[1].offsetWidth)) {
        menuBody[1].classList.toggle('_active');
    }
    if (!event.target.closest('.menu') || event.clientX > menuBody[1].offsetLeft && event.clientX < (menuBody[1].offsetLeft + menuBody[1].offsetWidth)) {
        menuBody[0].classList.remove('_active');
    }
    if (!event.target.closest('.menu') || event.clientX > menuBody[0].offsetLeft && event.clientX < (menuBody[0].offsetLeft + menuBody[0].offsetWidth)) {
        menuBody[1].classList.remove('_active');
    }
}

console.log(menuBody[0])
