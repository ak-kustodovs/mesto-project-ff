// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function addCard(alt, link) {
    let card=cardTemplate.querySelector('.card').cloneNode(true);
    let cardImage = card.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = alt;

    let deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    placesList.append(card);
}

// @todo: Функция удаления карточки

function deleteCard(evt) {
    let cardTarget = evt.target.closest('.card');
    cardTarget.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function(element) {
    addCard(element.name, element.link);
});
