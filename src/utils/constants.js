export const cards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
export const validationOptions = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.submit-btn',
    inactiveButtonClass: 'submit-btn_disabled',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__input-error_active'
}

export const popupList = document.querySelectorAll('.popup');
export const profilePopup = document.querySelector('.popup_profile');
export const profileFormElement = document.forms.profile;
export const profileInputs = Array.from(profileFormElement.querySelectorAll('.form__item'));
export const profileSubmitButton = profileFormElement.querySelector('.submit-btn');
export const profileInfoButton = document.querySelector('.profile__info-btn');
export const profileAddCardButton = document.querySelector('.profile__add-btn');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const nameProfile = profileFormElement.elements.profileName;
export const jobProfile = profileFormElement.elements.profileJob;

export const cardPopup = document.querySelector('.popup_card');
export const cardsContainer = document.getElementById('cards-container');
export const cardFormElement = document.forms.card;
export const cardInputs = Array.from(cardFormElement.querySelectorAll('.form__item'));
export const cardSubmitButton = cardFormElement.querySelector('.submit-btn');
export const cardNameInput = cardFormElement.elements.cardName;
export const cardImageInput = cardFormElement.elements.cardUrl;

export const profilePopupSelectors = {
    popup: '.popup_profile',
    submitButtonSelector: '.submit-btn_profile',
    inputSelector: '.form__item',
    formSelector: '.form_profile',
}

export const cardPopupSelectors = {
    popup: '.popup_card',
    submitButtonSelector: '.submit-btn_card',
    inputSelector: '.form__item',
    formSelector: '.form_card',
}

export const photoPopupSelectors = {
    popup: '.popup_photo',
    popupDescription: '.popup__photo-paragraph',
    popupImage: '.popup__photo-image',
}

export const userSelectors = {
    name: '.profile__name',
    job: '.profile__job',
}