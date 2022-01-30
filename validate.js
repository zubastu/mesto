

const showInputError = (inputElement, validationOption) => {
    const errorElement = inputElement.parentNode.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationOption.errorClass);
    errorElement.classList.add(validationOption.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (inputElement, validationOption) => {
    const errorElement = inputElement.parentNode.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationOption.errorClass);
    errorElement.classList.remove(validationOption.inputErrorClass);
    errorElement.textContent = '';
};

const validationOptions = [
    {
        formSelector: ".form_profile",
        inputSelector: '.form__item',
        submitButtonSelector: '.submit-btn',
        inactiveButtonClass: 'submit-btn_disabled',
        inputErrorClass: 'form__input-error_active',
        errorClass: 'form__item_type_error',
        hideElementError: hideInputError,
        showElementError: showInputError,
    },
    {
        formSelector: '.form_card',
        inputSelector: '.form__item',
        submitButtonSelector: '.submit-btn',
        inputErrorClass: 'form__input-error_active',
        errorClass: 'form__item_type_error',
        hideElementError: hideInputError,
        showElementError: showInputError,
    }
]

const validateElement = ( element, validationOption ) => {
    if (element.validity.valid) {
        validationOption.hideElementError(element, validationOption);
        return true;
    } else {
        validationOption.showElementError(element, validationOption);
        return false;
    }
}

const validateForm = (formElement, validationOption) => {
    formElement.checkValidity();
    const validationElements = formElement.querySelectorAll(validationOption.inputSelector);
    const validationResults = [];
    validationElements.forEach( ( element ) => {
        validationResults.push( validateElement(element, validationOption ) );
    });

    const formIsValid = validationResults.some((boolean)=>{
        return !boolean;
    });

    if ( formIsValid ) {
        const submitButton = formElement.querySelector(validationOption.submitButtonSelector);
        submitButton.classList.add(validationOption.inactiveButtonClass);
        submitButton.setAttribute('disabled', 'true');
    } else {
        const submitButton = formElement.querySelector(validationOption.submitButtonSelector);
        submitButton.classList.remove(validationOption.inactiveButtonClass);
        submitButton.removeAttribute('disabled');
    }
}

const enableFormValidation = (validationOption) => {
    const formElement = document.querySelector(validationOption.formSelector);
    const validationElements = formElement.querySelectorAll(validationOption.inputSelector);
    validationElements.forEach( (element) => {
        element.addEventListener( 'input', (event) => {
            validateForm(formElement, validationOption);
        })
    });
}

const enableFormValidations = (validationOptions) =>{
    validationOptions.forEach((validationOption)=>{
        enableFormValidation(validationOption);
    });
}
enableFormValidations(validationOptions)
