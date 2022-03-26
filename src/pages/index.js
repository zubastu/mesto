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
    userSelectors,
    avatarPopupSelectors,
    popupAcceptSelectors,
    cardSelectors,
    hideInput,
    cardsContainer,
} from '../utils/constants.js';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Client from "../components/Client.js";
import API from "../components/API.js";
import PopupWithHideInput from "../components/PopupWithHideInput";

const client = new Client('https://mesto.nomoreparties.co/v1/cohort-38', {
    authorization: 'fc656d80-9f90-48b6-9907-1de866c0eaf7',
    'Content-Type': 'application/json',
    'Accept': 'application/json: charset=utf-8'
});


const api = new API(client);

const validationProfile = new FormValidator(validationOptions, profileFormElement);

const validationCard = new FormValidator(validationOptions, cardFormElement);

const popupImage = new PopupWithImage(photoPopupSelectors);

const userInfo = new UserInfo(userSelectors, openUserPopup,
    api.getUserInfo().then((data) => {
        userInfo.initUserLoad(data);
    })
);

const profileForm = new PopupWithForm(profilePopupSelectors, (userData) => {
    handleProfileFormSubmit(userData);
});

const cardForm = new PopupWithForm(cardPopupSelectors, (cardData) => {
    createNewCard(cardData);
});

const avatarForm = new PopupWithForm(avatarPopupSelectors, (avatarData) => {
    changeAvatar(avatarData);
});

const popupAcceptDelete = new PopupWithHideInput(popupAcceptSelectors, (id) => {
    deleteCard(id);
})

function renderCards() {
    cardsContainer.innerHTML = '';
    api.loadAllCards().then((cards) => {
        const section = new Section({
            items: cards,
            renderer: renderCard,
        }, '.photo-cards');
        section.renderArray();
    });
}

function openProfilePopupShowDetails() {
    const userData = userInfo.getUserInfo();
    nameProfile.value = userData.name;
    jobProfile.value = userData.job;
    validationProfile.clearErrorMessages();
    profileForm.open();
}

function handleProfileFormSubmit(userData) {
    const dataUser = {
        name: userData.profileName,
        about: userData.profileJob,
    }
    api.setUserInfo(dataUser).then(() => {
        profileForm.close();
        api.getUserInfo().then((data) => {
            userInfo.setUserInfo({
                firstInput: data.name,
                secondInput: data.about,
            })
        })
    }).then(() => {
        api.getUserInfo().then((data) => {
            userInfo.initUserLoad(data);
        });
    })
}

function renderCard(cardItem) {
    const card = {
        name: cardItem.name,
        link: cardItem.link,
        _id: cardItem._id,
        likes: cardItem.likes,
        owner: cardItem.owner,
        handleClick: openPhotoPopup,
        deleteHandleClick: openDeletePopup,
    }
    return new Card(card, '.template-card', cardSelectors).generateCard();
}

function createNewCard(cardData) {
    const card = {
        name: cardData.name,
        link: cardData.link,
        handleClick: openPhotoPopup,
        deleteHandleClick: openDeletePopup,
    }
    api.createCard(card).then(() => {
        renderCards();
        cardForm.close();
    })
}

function openPhotoPopup(name, link) {
    popupImage.open(name, link);
}

function openCardPopupHandler() {
    cardForm.open();
    validationCard.clearErrorMessages();
}

function openUserPopup() {
    avatarForm.open();
}

function changeAvatar(avatarData) {
    api.setAvatar(avatarData).then((userData) => {
        userInfo.initUserLoad(userData)
        avatarForm.close()
    })
}

function openDeletePopup(id) {
    hideInput.value = id
    popupAcceptDelete.open()
}

function deleteCard(id) {
    api.deleteCard(id).then(() => {
        popupAcceptDelete.close();
        renderCards();
    });
}

profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileAddCardButton.addEventListener('click', openCardPopupHandler);

validationProfile.enableValidation();
validationCard.enableValidation();
popupImage.setEventListeners();
profileForm.setEventListenersForm();
popupAcceptDelete.setEventListeners();
avatarForm.setEventListenersForm();
userInfo.setEventListeners();
cardForm.setEventListenersForm();
renderCards();