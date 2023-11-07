function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupOnEsc);
    document.addEventListener('mousedown', closePopupOnOverlay);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupOnEsc);
    document.removeEventListener('mousedown', closePopupOnOverlay);
}

function closePopupOnEsc(evt) {
    if (evt.key==='Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
}

function closePopupOnOverlay(evt)  {
    if (evt.target.classList.contains('popup_is-opened'))
    {
    const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
}

export  {openPopup, closePopup}