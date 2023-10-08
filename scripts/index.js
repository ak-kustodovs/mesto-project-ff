// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function addCard(alt, link, deleteCardFunction) {
    let card=cardTemplate.querySelector('.card').cloneNode(true);
    let cardImage = card.querySelector('.card__image');
    let cardTitle = card.querySelector('.card__title');
    cardImage.src = link;
    cardImage.alt = alt;
    cardTitle.textContent =  alt;

    let deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCardFunction);

    placesList.append(card);
}

// @todo: Функция удаления карточки

function deleteCard(evt) {
    let cardTarget = evt.target.closest('.card');
    cardTarget.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function(element) {
    addCard(element.name, element.link, deleteCard);
});
