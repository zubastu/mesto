
const profileSelectors = {
    editButton: '.profile__info-btn',
    addCardButton: '.profile__add-btn',
};

const formSelectors = {
    profile: '.form_profile',
    profileName: '.form__item_input_name-profile',
    profileJob: '.form__item_input_job-profile',
    card: '.form_card',
    avatar: '.form_type_avatar',
};

export const profilePopupSelectors = {
    popup: '.popup_profile',
    submitButtonSelector: '.submit-btn_profile',
    inputSelector: '.form__item',
    formSelector: '.form_profile',
    hideInputSelector: false
};

export const cardPopupSelectors = {
    popup: '.popup_card',
    submitButtonSelector: '.submit-btn_card',
    inputSelector: '.form__item',
    formSelector: '.form_card',
    hideInputSelector: false
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

export const validationOptionsAvatar = {
    formSelector: '.form_type_avatar',
    inputSelector: '.form__item_input_link-avatar',
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
    hideInputSelector: '.hide-input'
}

export const cardSelectors = {
    card: '.card',
    like: '.card__like',
    delete: '.card__delete',
    picture: '.card__picture',
    text: '.card__text',
    counter: '.card__like-counter',
}

export const submitAvatar = document.querySelector('.submit-btn_avatar');
export const submitProfile = document.querySelector('.submit-btn_profile');
export const submitCard = document.querySelector('.submit-btn_card');
export const avatarFormElement = document.querySelector(formSelectors.avatar);
export const profileFormElement = document.querySelector(formSelectors.profile);
export const cardFormElement = document.querySelector(formSelectors.card);
export const profileInfoButton = document.querySelector(profileSelectors.editButton);
export const profileAddCardButton = document.querySelector(profileSelectors.addCardButton);
export const nameProfile = profileFormElement.querySelector(formSelectors.profileName);
export const jobProfile = profileFormElement.querySelector(formSelectors.profileJob);
export const hideInput = document.querySelector(popupAcceptSelectors.hideInputSelector);
export const cardsContainer = document.querySelector('.photo-cards');
