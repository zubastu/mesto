<<<<<<< Updated upstream
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
=======
import {
    profileInputs,
    profileSubmitButton,
    cardInputs,
    cardSubmitButton,
    cardImageInput,
    cardFormElement,
    cardPopup,
    cardNameInput,
    cards,
    cardsContainer,
    jobProfile,
    nameProfile,
    popupList,
    profileAddCardButton,
    profileFormElement,
    profileInfoButton,
    profileJob,
    profileName,
    profilePopup,
    photoPopup,
    popupPhotoParagraph,
    popupPhotoImage,
    photoPopupSelectors,
    cardPopupSelectors,
    profilePopupSelectors,
    validationOptions,
} from "../utils/constants";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
>>>>>>> Stashed changes

/*
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

function openPhotoPopup(card) {
    popupPhotoParagraph.textContent = card._alt;
    popupPhotoImage.src = card._image;
    popupPhotoImage.alt = card._name;
    openPopup(photoPopup);
}

function createCardFromPopup() {
    const card = {
        name: cardNameInput.value,
        link: cardImageInput.value,
        handleClick: openPhotoPopup,
    }
    const cardElement = new Card(card, '.template-card').generateCard();
    addCard(cardElement);
}

function submitCardHandler(event) {
    event.preventDefault();
    createCardFromPopup();
    closePopup(cardPopup);
    cardFormElement.reset();
}

function addCard(newCard) {
    cardsContainer.prepend(newCard);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function initCards() {
    cards.forEach((item) => {
        const card = {
            name: item.name,
            link: item.link,
            handleClick: openPhotoPopup
        }
        const cardElement = new Card(card, '.template-card').generateCard();
        addCard(cardElement);
    });
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

popupList.forEach((popup) => {
    popup.addEventListener('click', ( evt ) => {
        if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('close-btn'))) {
            closePopup(popup);
        }
    });
});

profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileFormElement.addEventListener('submit', submitProfileHandler);
profileAddCardButton.addEventListener('click', openCardPopupHandler);
cardFormElement.addEventListener('submit', submitCardHandler);

initCards();
validationProfile.enableValidation();
validationCard.enableValidation();

*/

const profileInfo = new UserInfo({
    name: profileName.textContent,
    job: profileJob.textContent,
});
console.log(profileInfo)