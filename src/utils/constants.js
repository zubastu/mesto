import arkhyz from '../images/Архыз.jpg';
import chelyabinsk from '../images/chelyabinsk-oblast.jpg';
import ivanovo from '../images/ivanovo.jpg';
import kamchatka from '../images/kamchatka.jpg';
import holmogorskiy from '../images/kholmogorsky-rayon.jpg';
import baikal from '../images/baikal.jpg';

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
    avatar: '.profile__avatar-image',
};

export const validationOptions = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.submit-btn',
    inactiveButtonClass: 'submit-btn_disabled',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__input-error_active'
};

export const avatarPopupSelectors = {
    popup: '.popup_avatar',
    submitButtonSelector: '.submit-btn_avatar',
    inputSelector: '.form__item',
    formSelector: '.form_type_avatar',
}

export const popupAcceptSelectors = {
    popup: '.popup_accept-delete-card',
    submitButtonSelector: '.submit-btn_type_accept',
    inputSelector: false,
    formSelector: '.form-accept',
}

export const cardSelectors = {
    card: '.card',
    like: '.card__like',
    delete: '.card__delete',
    picture: '.card__picture',
    text: '.card__text',
    counter: '.card__like-counter',
}

export const cards = [
    {
        name: 'Архыз',
        link:  arkhyz
    },
    {
        name: 'Челябинская область',
        link: chelyabinsk,
    },
    {
        name: 'Иваново',
        link: ivanovo,
    },
    {
        name: 'Камчатка',
        link: kamchatka,
    },
    {
        name: 'Холмогорский район',
        link: holmogorskiy,
    },
    {
        name: 'Байкал',
        link: baikal,
    }
];
export const profileFormElement = document.querySelector(formSelectors.profile);
export const cardFormElement = document.querySelector(formSelectors.card);
export const profileInfoButton = document.querySelector(profileSelectors.editButton);
export const profileAddCardButton = document.querySelector(profileSelectors.addCardButton);
export const nameProfile = profileFormElement.querySelector(formSelectors.profileName);
export const jobProfile = profileFormElement.querySelector(formSelectors.profileJob);
