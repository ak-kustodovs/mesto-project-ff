import './pages/index.css'; 
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard,likeCard} from './scripts/card.js'
import { openPopup,closePopup } from './scripts/popup.js';

const placesList = document.querySelector('.places__list');

const cardPopup = document.querySelector('.popup_type_image');
const cardPopupImage = cardPopup.querySelector('.popup__image');
const cardPopupCaption = cardPopup.querySelector('.popup__caption');
const profileEditPopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.forms['edit-profile'];
const profileEditFormName = profileEditForm.elements.name;
const profileEditFormJob = profileEditForm.elements.description;
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const cardAddNewPopup = document.querySelector('.popup_type_new-card');
const cardAddNewButton = document.querySelector('.profile__add-button');
const cardForm = document.forms['new-place'];
const cardFormName = cardForm.elements['place-name'];
const cardFormLink = cardForm.elements.link;

function addCard(alt, link) {
    console.log(openPopup);
    const card = createCard(alt,link, deleteCard,likeCard, handleOpenCardImage );
    placesList.append(card);
}

initialCards.forEach(function(element) {
    addCard(element.name, element.link);
});

function handleOpenCardImage(evt) {
    cardPopupImage.src = evt.target.src;
    cardPopupImage.alt = evt.target.alt;
    cardPopupCaption.textContent = evt.target.alt;
    openPopup(cardPopup);
}

function handleClosePopupOnX(evt) {
    if (evt.target.classList.contains('popup__close')){
        const popup = evt.target.closest('.popup');
        closePopup(popup);
    }
}

document.addEventListener('click', (evt) => {
    handleClosePopupOnX(evt);
});

profileEditButton.addEventListener('click', () => {
    profileEditFormName.value = profileName.textContent;
    profileEditFormJob.value =  profileJob.textContent;
    openPopup(profileEditPopup);
});

function handlProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileEditFormName.value;
    profileJob.textContent = profileEditFormJob.value;
    closePopup(profileEditPopup);
}

profileEditForm.addEventListener('submit', handlProfileEditFormSubmit);

cardAddNewButton.addEventListener('click', ()=>{
    cardForm.reset();
    openPopup(cardAddNewPopup);
});

function handleAddNewCard(evt) {
    evt.preventDefault();
    const name = cardFormName.value;
    const link = cardFormLink.value;
    const card = {name, link};
    const createdCard = createCard(card.name,card.link, deleteCard,likeCard, handleOpenCardImage );
    placesList.prepend(createdCard);
    closePopup(cardAddNewPopup);
}

cardForm.addEventListener('submit', handleAddNewCard);






