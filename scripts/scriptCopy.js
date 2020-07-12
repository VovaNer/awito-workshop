'use strict';

const dateBase = [];

const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item'),
    modalWarning = document.querySelector('.modal__btn-warning');

const elementsModalSubmit = [...modalSubmit.elements]
    .filter(elem => elem.tagName !== 'BUTTON');

const closeModal = function(event) {
    if(event.target.closest('.modal__close') || event.target === this) {
        this.classList.add('hide');
        modalSubmit.reset();
    }
};

const closeModalEsc = function(event) {
    if(event.code === 'Escape') {
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
        modalSubmit.reset();
        document.removeEventListener('keydown', closeModalEsc);
    }
};

// Проверка формы в первом модальном окне
modalSubmit.addEventListener('input', () => {
    const validForm = elementsModalSubmit.every(elem => elem.value);
    modalBtnSubmit.disabled = !validForm;
    modalWarning.style.display = validForm ? 'none' : '';
});

modalSubmit.addEventListener('submit', event => {
    event.preventDefault();
    const itemObj = {};

    for (const elem of elementsModalSubmit) {
        itemObj[elem.name] = elem.value;
    }
    dateBase.push(itemObj);
    modalSubmit.reset();
});

// Клик по кнопке открывает первое модальное окно
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
    // Закрывать оба модальных окна по кнопке Escape
    document.addEventListener('keydown', closeModalEsc);
});

// Клик по элементам каталога открывает модальное окно
catalog.addEventListener('click', event => {
    if(event.target.closest('.card')) {
        modalItem.classList.remove('hide');
        // Закрывать оба модальных окна по кнопке Escape
        document.addEventListener('keydown', closeModalEsc);
    }
});

// Закрывать первое модальное окно по клику
modalAdd.addEventListener('click', closeModal);
// Закрывать второе модальное окно по клику
modalItem.addEventListener('click', closeModal);









