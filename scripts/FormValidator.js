export default class FormValidator {

    constructor(data, form) {
        this.formElement = form;
        this.formSelector = data.formSelector;
        this.inputSelector = data.inputSelector;
        this.submitButtonSelector = data.submitButtonSelector;
        this.inactiveButtonClass = data.inactiveButtonClass;
        this.inputErrorClass = data.inputErrorClass;
        this.errorClass = data.errorClass;
    }

    enableValidation() {
// сюда приходит не определено, почему?
        this.formElement.forEach( (form) => {
            this._setEventListeners(form);
        })
    }


    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this.inputSelector));
        const buttonElement = formElement.querySelector(this.submitButtonSelector);
        this.toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this.toggleButtonState(inputList, buttonElement);
            });
        });
    }

    toggleButtonState(inputList, buttonElement){
        if (this._hasInvalidInput(inputList)) {
            buttonElement.setAttribute('disabled', true);
            buttonElement.classList.add(this.inactiveButtonClass);

        } else {
            buttonElement.classList.remove(this.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

    hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = '';
    }


    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.errorClass);
    }

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this.hideInputError(formElement, inputElement);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

}