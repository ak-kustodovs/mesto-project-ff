const cardTemplate = document.querySelector('#card-template').content;

function createCard(alt, link, deleteCardFunction, likeFunction, openPopupFunction) {
    const card=cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const deleteButton = card.querySelector('.card__delete-button');
    const cardLikeButton = card.querySelector('.card__like-button');
    cardImage.src = link;
    cardImage.alt = alt;
    cardTitle.textContent =  alt;

    cardImage.addEventListener('click', openPopupFunction);
    cardLikeButton.addEventListener('click', likeFunction);
    deleteButton.addEventListener('click', deleteCardFunction);

    return card;
}

function deleteCard(evt) {
    const cardTarget = evt.target.closest('.card');
    cardTarget.remove();
}

function likeCard(evt)  {
    const card = evt.target;
    card.classList.toggle('card__like-button_is-active');
}

export {createCard, deleteCard, likeCard}