import './index.css';
import {
    photoPopupSelectors,
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
    renderer: renderCard,
}, '.photo-cards');

const userInfo = new UserInfo({
    name: userSelectors.name,
    job: userSelectors.job,
});

const profileForm = new PopupWithForm(profilePopupSelectors, (userData) => {
    handleProfileFormSubmit(userData);
});

const cardForm = new PopupWithForm(cardPopupSelectors, (cardData) => {
    createNewCard(cardData);
});

function openProfilePopupShowDetails() {
    const userData = userInfo.getUserInfo();
    nameProfile.value = userData.name;
    jobProfile.value = userData.job;
    validationProfile.clearErrorMessages();
    profileForm.open();
}

function handleProfileFormSubmit(userData) {
    const dataUser = {
        firstInput: userData.profileName,
        secondInput: userData.profileJob,
    }
    userInfo.setUserInfo(dataUser);
    profileForm.close();
}

function renderCard(cardItem) {
    const card = {
        name: cardItem.name,
        link: cardItem.link,
        handleClick: openPhotoPopup,
    }
    return new Card(card, '.template-card', false).generateCard();
}

function createNewCard(cardData) {
    const card = {
        name: cardData.name,
        link: cardData.link,
        handleClick: openPhotoPopup,
    }
    const cardElement = new Card(card, '.template-card', true).generateCard();
    section.addItem(cardElement);
    cardForm.close();
}

function openPhotoPopup(name, link) {
    popupImage.open(name, link);
}

function openCardPopupHandler() {
    cardForm.open();
    validationCard.clearErrorMessages();
}

profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileAddCardButton.addEventListener('click', openCardPopupHandler);

validationProfile.enableValidation();
validationCard.enableValidation();
popupImage.setEventListeners();
profileForm.setEventListeners();
cardForm.setEventListeners();
section.renderArray();

