const cardTemplate = document.querySelector('#card-template').content;

function createCard(alt, link, deleteCardFunction, likeFunction, openPopupFunction) {
    let card=cardTemplate.querySelector('.card').cloneNode(true);
    let cardImage = card.querySelector('.card__image');
    let cardTitle = card.querySelector('.card__title');
    let deleteButton = card.querySelector('.card__delete-button');
    let cardLikeButton = card.querySelector('.card__like-button');
    cardImage.src = link;
    cardImage.alt = alt;
    cardTitle.textContent =  alt;

    cardImage.addEventListener('click', openPopupFunction);
    cardLikeButton.addEventListener('click', likeFunction);
    deleteButton.addEventListener('click', deleteCardFunction);

    return card;
}

function deleteCard(evt) {
    let cardTarget = evt.target.closest('.card');
    cardTarget.remove();
}

function likeCard(evt)  {
    let card = evt.target;
    card.classList.toggle('card__like-button_is-active');
}

export {createCard, deleteCard, likeCard}