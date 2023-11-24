const cardTemplate = document.querySelector('#card-template').content;
const myID = "3fd82b71a19a0c85d3b383ec";


function createCard(cardData, deleteCardFunction, likeFunction, openPopupFunction) {
    const card=cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const deleteButton = card.querySelector('.card__delete-button');
    const cardLikeButton = card.querySelector('.card__like-button');
    const cardID = cardData['_id'];
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent =  cardData.name;

    cardImage.addEventListener('click', openPopupFunction);
    cardLikeButton.addEventListener('click', likeFunction);

    if (cardData.owner['_id']!=myID) {
        deleteButton.style.display = 'none'
    }
    else {
        deleteButton.addEventListener('click', deleteCardFunction);
    }

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