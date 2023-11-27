import './pages/index.css'; 
import {getCards, getProfile, updateProfile, updateCards, deleteCard, likeCard, unlikeCard, updateAvatar} from './scripts/api.js'
import {createCard, handleLikeCard} from './scripts/card.js'
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
const profileEditSubmitButton = profileEditForm.querySelector('.popup__button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image');
const cardAddNewPopup = document.querySelector('.popup_type_new-card');
const cardAddNewButton = document.querySelector('.profile__add-button');
const cardForm = document.forms['new-place'];
const cardFormName = cardForm.elements['place-name'];
const cardFormLink = cardForm.elements.link;
const cardFormSubmitButton = cardForm.querySelector('.popup__button');
const cardDeletePopup = document.querySelector('.popup_type_delete');
const cardDeleteForm = document.forms['delete-form'];
const avatarPopup = document.querySelector('.popup_type_update-avatar');
const avatarUpdateButton = document.querySelector(".profile__image-container");
const avatarUpdateForm = document.forms['update-avatar'];
const avatarFormInput = avatarUpdateForm.elements.link;
const avatarUpdateFormSubmitButton = avatarUpdateForm.querySelector('.popup__button');
const promiseArray =[getCards, getProfile];
const popupCloseButtons = document.querySelectorAll('.popup__close');



const validationConfig =  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

function addCard(data) {
    const card = createCard(data, openDeletePopup,handleLikeCard, handleOpenCardImage );
    placesList.append(card);
}

function openDeletePopup(id) {
    cardDeleteForm.dataset.id=id;
    openPopup(cardDeletePopup);
}

Promise.all(promiseArray)
.then(()=> {
    getProfile()
    .then(data => {
        profileName.textContent = data.name;
        profileJob.textContent = data.about;
        profileAvatar.style.backgroundImage = `url('${data.avatar}')`;
    })
    .catch(error => {
        console.log(error);
    })
    getCards()
    .then(data=> {
        data.forEach((card)=>addCard(card));
    })
    .catch(error=> {
        console.log(error);
    })
})

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

popupCloseButtons.forEach((button)=> {
    button.addEventListener('click', (evt) => {
        handleClosePopupOnX(evt)});
})


profileEditButton.addEventListener('click', () => {
    profileEditFormName.value = profileName.textContent;
    profileEditFormJob.value =  profileJob.textContent;
    clearValidation(profileEditForm, validationConfig);
    openPopup(profileEditPopup);
});

function handlProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileEditSubmitButton.textContent = "Сохранение...";
    updateProfile(profileEditFormName.value, profileEditFormJob.value)
    .then((data)=> {
        profileName.textContent = data.name;
        profileJob.textContent = data.about;
        closePopup(profileEditPopup);
        clearValidation(profileEditForm, validationConfig);
    })
    .catch((error)=> {
        console.log(error);
    })
    .finally(()=> {
        profileEditSubmitButton.textContent = "Сохранить";
    })
}

profileEditForm.addEventListener('submit', handlProfileEditFormSubmit);

cardAddNewButton.addEventListener('click', ()=>{
    cardForm.reset();
    clearValidation(cardForm, validationConfig);
    openPopup(cardAddNewPopup);
});

function handleAddNewCard(evt) {
    evt.preventDefault();
    cardFormSubmitButton.textContent = "Сохранение...";
    const name = cardFormName.value;
    const link = cardFormLink.value;
    updateCards(name,link)
    .then((data)=> {
        placesList.prepend(createCard(data, openDeletePopup,handleLikeCard, handleOpenCardImage));
        closePopup(cardAddNewPopup);
        cardFormSubmitButton.textContent = "Сохранить";
    })
    .catch((error)=> {
        console.log(error);
    })
    
}

cardForm.addEventListener('submit', handleAddNewCard);

function handleDeleteCard(evt) {
    evt.preventDefault();
    deleteCard(cardDeleteForm.dataset.id)
    .then(()=>{
        const card = document.querySelector(`[id='${cardDeleteForm.dataset.id}']`);
        card.remove();
        closePopup(cardDeletePopup);
    })
    .catch((error) => {
        console.log(error);
    })
}

cardDeleteForm.addEventListener('submit', handleDeleteCard);

avatarUpdateButton.addEventListener('click', ()=>{
    avatarUpdateForm.reset();
    clearValidation(avatarUpdateForm, validationConfig);
    openPopup(avatarPopup);
})

function handleUpdateAvatar(evt) {
    evt.preventDefault();
    avatarUpdateFormSubmitButton.textContent = "Сохранение...";
    updateAvatar(avatarFormInput.value)
    .then((data) => {
        profileAvatar.style.backgroundImage = `url('${data.avatar}')`;
        closePopup(avatarPopup);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=> {
        avatarUpdateFormSubmitButton.textContent = "Сохранить";
    })
}

avatarUpdateForm.addEventListener('submit', handleUpdateAvatar);

enableValidation(validationConfig);




