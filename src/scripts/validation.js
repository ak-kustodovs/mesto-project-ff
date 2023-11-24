function enableValidation(validationConfig) {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, validationConfig.inputSelector, validationConfig.inputErrorClass,
            validationConfig.errorClass, validationConfig.submitButtonSelector, validationConfig.inactiveButtonClass);
    });
}


function showError(form, input, errorMessage, inputErrorClass, errorClass)  {
    const element = form.querySelector(`.${input.id}-error`);
    input.classList.add(inputErrorClass);
    element.textContent  = errorMessage;
    element.classList.add(errorClass);
}

function hideError(form, input, inputErrorClass, errorClass) {
    const element = form.querySelector(`.${input.id}-error`);
    console.log(element);
        input.classList.remove(inputErrorClass);
    element.classList.remove(errorClass);
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState (inputList, button, disabledButtonClass) {
    if (hasInvalidInput(inputList))  {
        button.classList.add(disabledButtonClass);
    }
    else {
        button.classList.remove(disabledButtonClass);
    }
}

function setEventListeners(form, input, inputErrorClass, errorClass, submitButton, disabledButtonClass) {
    const inputList  = Array.from(form.querySelectorAll(input))
    const button = form.querySelector(submitButton);
    toggleButtonState(inputList, button, disabledButtonClass);
    inputList.forEach((element) => {
        element.addEventListener('input', () => {
            checkInput(form, element, inputErrorClass, errorClass);
            toggleButtonState(inputList, button, disabledButtonClass);
        });
    });
}

function checkInput(form, input, inputErrorClass, errorClass) {
    if (input.validity.patternMismatch)
    {
        input.setCustomValidity(input.dataset.errorMessage);
    }
    else input.setCustomValidity("");
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, inputErrorClass, errorClass);
    }
    else hideError(form, input, inputErrorClass, errorClass);
}

function clearValidation(form, validationConfig) {
    const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
    const button =  form.querySelector(validationConfig.submitButtonSelector);
    button.classList.add(validationConfig.inactiveButtonClass);
    inputList.forEach((element)=> {
        hideError(form, element, validationConfig.inputErrorClass, validationConfig.errorClass);
    });
}

export {enableValidation, clearValidation}