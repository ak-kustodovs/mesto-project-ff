import './pages/index.css'; 
import {getCards, getProfile, updateProfile, updateCards} from './scripts/api.js'
import {createCard, deleteCard,likeCard} from './scripts/card.js'
import { openPopup,closePopup } from './scripts/popup.js';
import { enableValidation, clearValidation } from './scripts/validation.js';

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
const profileAvatar = document.querySelector('.profile__image');
const cardAddNewPopup = document.querySelector('.popup_type_new-card');
const cardAddNewButton = document.querySelector('.profile__add-button');
const cardForm = document.forms['new-place'];
const cardFormName = cardForm.elements['place-name'];
const cardFormLink = cardForm.elements.link;

const initialCards = await getCards();

const validationConfig =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

function addCard(data) {
    const card = createCard(data, deleteCard,likeCard, handleOpenCardImage );
    placesList.append(card);
}

Promise.all([getCards, getProfile])
.then(()=>{
    initialCards.forEach((element) =>  {
        addCard(element);
    });
    getProfile(profileName, profileJob, profileAvatar);
})
.catch((error)=> {
    console.log(error)
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
    clearValidation(profileEditForm, validationConfig);
    openPopup(profileEditPopup);
});

function handlProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileEditFormName.value;
    profileJob.textContent = profileEditFormJob.value;
    updateProfile(profileName.textContent, profileJob.textContent);
    closePopup(profileEditPopup);
    clearValidation(profileEditForm, validationConfig);
}

profileEditForm.addEventListener('submit', handlProfileEditFormSubmit);

cardAddNewButton.addEventListener('click', ()=>{
    cardForm.reset();
    clearValidation(cardForm, validationConfig);
    openPopup(cardAddNewPopup);
});

function handleAddNewCard(evt) {
    evt.preventDefault();
    const name = cardFormName.value;
    const link = cardFormLink.value;
    updateCards(name,link)
    .then(()=>location.reload());
    
}

cardForm.addEventListener('submit', handleAddNewCard);

enableValidation(validationConfig);




