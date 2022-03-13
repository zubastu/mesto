import {
    cardPopup,
    cardInputs,
    profileInputs,
    profileSubmitButton,
    cardSubmitButton,
    cardImageInput,
    photoPopupSelectors,
    cardNameInput,
    jobProfile,
    popupList,
    profileAddCardButton,
    cardsContainer,
    profileFormElement,
    cardFormElement,
    nameProfile,
    profileInfoButton,
    profilePopup,
    cardPopupSelectors,
    profilePopupSelectors,
    validationOptions,
    profileName,
    profileJob,
    cards
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
popupImage.setEventListeners()

const renderCard = (cardItem) => {
    const card = {
        name: cardItem.name,
        link: cardItem.link,
        handleClick: openPhotoPopup,
    }
    return new Card(card, '.template-card').generateCard();
}

const section = new Section({
    items: cards,
    renderer: renderCard
}, '.photo-cards');


function createCardFromPopup() {
    const card = {
        name: cardNameInput.value,
        link: cardImageInput.value,
        handleClick: openPhotoPopup,
    }
    const cardElement = renderCard(card);
    section.addItem(cardElement);
}

function openPhotoPopup() {
    popupImage.open(this);
}

function submitProfileHandler(event) {
    event.preventDefault();
    profileName.textContent = nameProfile.value;
    profileJob.textContent = jobProfile.value;
    closePopup(profilePopup);
}

function openProfilePopupShowDetails() {
    nameProfile.value = profileName.textContent;
    jobProfile.value = profileJob.textContent;
    validationProfile.toggleButtonState(profileInputs, profileSubmitButton);
    validationProfile.clearErrorMessages(profileFormElement, profileInputs);
    openPopup(profilePopup);
}


function openCardPopupHandler() {
    openPopup(cardPopup);
    cardFormElement.reset();
    validationCard.toggleButtonState(cardInputs, cardSubmitButton);
    validationCard.clearErrorMessages(cardFormElement, cardInputs);
}




function submitCardHandler(event) {
    event.preventDefault();
    createCardFromPopup();
    closePopup(cardPopup);
    cardFormElement.reset();
}




profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileFormElement.addEventListener('submit', submitProfileHandler);
profileAddCardButton.addEventListener('click', openCardPopupHandler);
cardFormElement.addEventListener('submit', submitCardHandler);

// initCards();
validationProfile.enableValidation();
validationCard.enableValidation();

section.renderArray();
