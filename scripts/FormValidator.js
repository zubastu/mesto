export default class FormValidator {

    hideInputError(formElement, inputElement, validationOption) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(validationOption.inputErrorClass);
        errorElement.classList.remove(validationOption.errorClass);
        errorElement.textContent = '';
    }

    toggleButtonState(inputList, buttonElement, validationOption){
        if (hasInvalidInput(inputList)) {
            buttonElement.setAttribute('disabled', true);
            buttonElement.classList.add(validationOption.inactiveButtonClass);

        } else {
            buttonElement.classList.remove(validationOption.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

    _showInputError(formElement, inputElement, errorMessage, validationOption) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(validationOption.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(validationOption.errorClass);
    }

    _checkInputValidity(formElement, inputElement, validationOption) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage, validationOption);
        } else {
            hideInputError(formElement, inputElement, validationOption);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _setEventListeners(validationOption, formElement) {
        const inputList = Array.from(formElement.querySelectorAll(validationOption.inputSelector));
        const buttonElement = formElement.querySelector(validationOption.submitButtonSelector);
        toggleButtonState(inputList, buttonElement, validationOption);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                _checkInputValidity(formElement, inputElement, validationOption);
                toggleButtonState(inputList, buttonElement, validationOption);
            });
        });
    }
}
