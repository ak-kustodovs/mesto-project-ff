import {likeCard, unlikeCard} from './api.js';

const cardTemplate = document.querySelector('#card-template').content;


function createCard(cardData, deleteCardFunction, likeFunction, openPopupFunction, myID) {
    const card=cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const deleteButton = card.querySelector('.card__delete-button');
    const cardLikeButton = card.querySelector('.card__like-button');
    const likeCount = card.querySelector('.card__like-count');
    const cardID = cardData['_id'];
    card.id = cardID;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent =  cardData.name;

    cardImage.addEventListener('click', openPopupFunction);
    cardLikeButton.addEventListener('click', () => {
        likeFunction(cardLikeButton, likeCount, cardID)
    });
    likeCount.textContent = cardData.likes.length;

    if (cardData.owner['_id']!=myID) {
        deleteButton.style.display = 'none'
    }
    else {
        deleteButton.addEventListener('click', ()=>{
            deleteCardFunction(cardID)
        });
    }
    const myLikes = cardData.likes.find((element) => element._id === myID);
    if (myLikes) {
        cardLikeButton.classList.add('card__like-button_is-active')
    };
    return card;
}

function handleLikeCard(button, likeCount, id)  {
   if (button.classList.contains('card__like-button_is-active')) {
    unlikeCard(id)
    .then((data) => {
        button.classList.remove('card__like-button_is-active');
        likeCount.textContent = data.likes.length;
    })
    .catch((error) => {
        console.log(error);
    })
   }
   else {
    likeCard(id)
    .then((data)=> {
        console.log(data);
        button.classList.add('card__like-button_is-active');
        likeCount.textContent = data.likes.length;
    })
    .catch((error) => {
        console.log(error);
    })
   }
}

export {createCard, handleLikeCard}

