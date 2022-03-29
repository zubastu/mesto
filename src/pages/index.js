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
    avatarFormElement,
    validationOptionsAvatar,
    submitProfile,
    submitCard,
    submitAvatar,
    submitAcceptDeleteCard,
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
import {userAvatar} from "../utils/constants";

const client = new Client('https://mesto.nomoreparties.co/v1/cohort-38', {
    authorization: 'fc656d80-9f90-48b6-9907-1de866c0eaf7',
    'Content-Type': 'application/json',
    'Accept': 'application/json: charset=utf-8'
});


const api = new API(client);

const validationProfile = new FormValidator(validationOptions, profileFormElement);

const validationCard = new FormValidator(validationOptions, cardFormElement);

const validationAvatar = new FormValidator(validationOptionsAvatar, avatarFormElement)

const popupImage = new PopupWithImage(photoPopupSelectors);

const userInfo = new UserInfo(userSelectors, openUserPopup,
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

const section = new Section({
    renderer: renderCard,
}, '.photo-cards');

function renderCards() {
    cardsContainer.innerHTML = '';
    api.loadAllCards().then((cards) => {
        section.setData(cards);
        section.renderArray();
    }).catch((err) => {
        console.log(err);
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
    submitProfile.innerText = 'Сохранить...'
    const dataUser = {
        name: userData.profileName,
        about: userData.profileJob,
    }
    api.setUserInfo(dataUser).then((data) => {
            userInfo.setUserInfo({
                firstInput: data.name,
                secondInput: data.about,
                _id: data._id
            })
            userInfo.initUserLoad(data);
        }).then(() => {
            profileForm.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        submitProfile.innerText = 'Сохранить'
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
        removeLike: removeLike,
        setLike: setLike,
    }
    return new Card(card, '.template-card', cardSelectors, userInfo.getUserId()).generateCard();
}

function createNewCard(cardData) {
    submitCard.innerText = 'Создать...'
    const card = {
        name: cardData.name,
        link: cardData.link,
        handleClick: openPhotoPopup,
        deleteHandleClick: openDeletePopup,
        removeLike: removeLike,
        setLike: setLike,
    }

    api.createCard(card).then((card) => {
        const newCard = renderCard(card)
        section.addItem(newCard);
        cardForm.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        submitCard.innerText = 'Создать'
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
    validationAvatar.clearErrorMessages()
}

function changeAvatar(avatarData) {
    submitAvatar.innerText = 'Сохранить...'
    api.setAvatar(avatarData).then((userData) => {
        userInfo.initUserLoad(userData)
        avatarForm.close()
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        submitAvatar.innerText = 'Сохранить'
    })
}

function openDeletePopup(id, cardDelete) {
    hideInput.value = id
    popupAcceptDelete.setCardDeleteMethod(cardDelete);
    popupAcceptDelete.open()
}

function deleteCard(id) {
    submitAcceptDeleteCard.innerText = 'Да...'
    api.deleteCard(id).then(() => {
        const cardDelete = popupAcceptDelete.getCardDeleteMethod();
        cardDelete()
        popupAcceptDelete.close();
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        submitAcceptDeleteCard.innerText = 'Да'
    })
}

function setLike(cardId, renderLikes) {
    return api.useLike(cardId).then((data) => {
        renderLikes(data.likes)
    });
}

function removeLike(cardId, renderLikes) {
    return api.removeLike(cardId).then((data) => {
        renderLikes(data.likes)
    });
}

function initUserInfo() {
    userAvatar.src = defaultAvatar
    api.getUserInfo().then((data) => {
        userInfo.initUserLoad(data);
        userInfo.setUserId(data._id);
        renderCards();
    }).catch((err) => {
        console.log(err);
    });
}

profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileAddCardButton.addEventListener('click', openCardPopupHandler);

validationProfile.enableValidation();
validationCard.enableValidation();
validationAvatar.enableValidation()
popupImage.setEventListeners();
profileForm.setEventListenersForm();
popupAcceptDelete.setEventListeners();
avatarForm.setEventListenersForm();
userInfo.setEventListeners();
cardForm.setEventListenersForm();
initUserInfo();
