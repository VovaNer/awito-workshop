'use strict';

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modal__submit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modal__item = document.querySelector('.modal__item');

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', event => {
    const target = event.target;

    if(target.classList.contains('modal__close') || target === modalAdd) {
        modalAdd.classList.add('hide');
        modal__submit.reset();
    }
});

// Закрывать первое модальное окно (из воркшопа) по кнопке Escape
document.addEventListener('keydown', event => {
    if(event.keyCode === 27) {
        modalAdd.classList.add('hide');
        modal__submit.reset();
    }
});

// Клик по элементам каталога открывает модальное окно
catalog.addEventListener('click', event => {
    if(event.target.closest('.card')) {
        modal__item.classList.remove('hide');
    }
});

// Нажатие на кнопку Escape закрывает второе модальное окно
document.addEventListener('keydown', event => {
    if(event.keyCode === 27) {
        modal__item.classList.add('hide');
    }
})



