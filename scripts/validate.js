

const showInputError = (formElement, inputElement, errorMessage, validationOption) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationOption.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationOption.errorClass);
};
const hideInputError = (formElement, inputElement, validationOption) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationOption.inputErrorClass);
    errorElement.classList.remove(validationOption.errorClass);
    errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement, validationOption) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationOption);
    } else {
        hideInputError(formElement, inputElement, validationOption);
    }
};
const setEventListeners = (validationOption, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationOption.inputSelector));
    const buttonElement = formElement.querySelector(validationOption.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationOption);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, validationOption);
            toggleButtonState(inputList, buttonElement, validationOption);
        });
    });
};
const enableValidation = (validationOption) => {
    const formElement = Array.from(document.querySelectorAll(validationOption.formSelector));
    setEventListeners(validationOption, formElement);
};

function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
function toggleButtonState(inputList, buttonElement, validationOption){
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(validationOption.inactiveButtonClass);

    } else {
        buttonElement.classList.remove(validationOption.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}


enableValidation(validationOptions);
