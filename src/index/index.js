import './index.css';



import {
    cardImageInput,
    photoPopupSelectors,
    cardNameInput,
    jobProfile,
    profileAddCardButton,
    profileFormElement,
    cardFormElement,
    nameProfile,
    profileInfoButton,
    cardPopupSelectors,
    profilePopupSelectors,
    validationOptions,
    cards,
    userSelectors,
} from '../utils/constants.js';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const validationProfile = new FormValidator(validationOptions, profileFormElement);

const validationCard = new FormValidator(validationOptions, cardFormElement);

const popupImage = new PopupWithImage(photoPopupSelectors);

const section = new Section({
    items: cards,
    renderer: renderCard
}, '.photo-cards');

const userInfo = new UserInfo({
    name: userSelectors.name,
    job: userSelectors.job,
});

const profileForm = new PopupWithForm(profilePopupSelectors, () => {
    submitProfileHandler();

});

const cardForm = new PopupWithForm(cardPopupSelectors, () => {
    submitCardHandler();
});

function openProfilePopupShowDetails() {
    const userData = userInfo.getUserInfo()
    nameProfile.value = userData.name;
    jobProfile.value = userData.job;
    validationProfile.clearErrorMessages();
    profileForm.open();
}

function submitProfileHandler() {
    const profileInputsValue = profileForm._getInputValues();
    const dataUser = {
        firstInput: profileInputsValue.profileName,
        secondInput: profileInputsValue.profileJob,
    }
    userInfo.setUserInfo(dataUser)
    profileForm.close();
}

function renderCard(cardItem) {
    const card = {
        name: cardItem.name,
        link: cardItem.link,
        handleClick: openPhotoPopup,
    }
    return new Card(card, '.template-card').generateCard();
}

function createCardFromPopup() {
    const card = {
        name: cardNameInput.value,
        link: cardImageInput.value,
        handleClick: openPhotoPopup,
    }
    const cardElement = renderCard(card);
    section.addItem(cardElement);
    cardForm.close();
}

function openPhotoPopup() {
    popupImage.open(this);
}

function openCardPopupHandler() {
    cardForm.open()
    validationCard.clearErrorMessages();
}

function submitCardHandler() {
    createCardFromPopup();
    cardForm.close()
}

profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileAddCardButton.addEventListener('click', openCardPopupHandler);

validationProfile.enableValidation();
validationCard.enableValidation();
profileForm.setEventListeners()
cardForm.setEventListeners()
section.renderArray();
popupImage.setEventListeners();

