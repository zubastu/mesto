const profileSelectors = {
    editButton: '.profile__info-btn',
    addCardButton: '.profile__add-btn',
};

const formSelectors = {
    profile: '.form_profile',
    profileName: '.form__item_input_name-profile',
    profileJob: '.form__item_input_job-profile',
    card: '.form_card',
};

export const profilePopupSelectors = {
    popup: '.popup_profile',
    submitButtonSelector: '.submit-btn_profile',
    inputSelector: '.form__item',
    formSelector: '.form_profile',
};

export const cardPopupSelectors = {
    popup: '.popup_card',
    submitButtonSelector: '.submit-btn_card',
    inputSelector: '.form__item',
    formSelector: '.form_card',
};

export const photoPopupSelectors = {
    popup: '.popup_photo',
    popupDescription: '.popup__photo-paragraph',
    popupImage: '.popup__photo-image',
};

export const userSelectors = {
    name: '.profile__name',
    job: '.profile__job',
};

export const validationOptions = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.submit-btn',
    inactiveButtonClass: 'submit-btn_disabled',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__input-error_active'
};

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
export const profileFormElement = document.querySelector(formSelectors.profile);
export const cardFormElement = document.querySelector(formSelectors.card);
export const profileInfoButton = document.querySelector(profileSelectors.editButton);
export const profileAddCardButton = document.querySelector(profileSelectors.addCardButton);
export const nameProfile = profileFormElement.querySelector(formSelectors.profileName);
export const jobProfile = profileFormElement.querySelector(formSelectors.profileJob);
