
const profilePopup = document.querySelector('.popup_profile');
const profileFormElement = document.forms.profile;
const profileInfoButton = document.querySelector('.profile__info-btn');
const profileAddCardButton = document.querySelector('.profile__add-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const photoPopup = document.querySelector('.popup_photo');
const cardPopup = document.querySelector('.popup_card');
const cardsContainer = document.getElementById('cards-container');
const cardFormElement = document.forms.card;
const nameProfile = profileFormElement.elements.profileName;
const jobProfile = profileFormElement.elements.profileJob;
const cardNameInput = cardFormElement.elements.cardName;
const cardImageInput = cardFormElement.elements.cardUrl;

function submitProfileHandler(){
    profileName.textContent = nameProfile.value;
    profileJob.textContent = jobProfile.value;
    closePopup(profilePopup);
}
function openProfilePopupShowDetails(){
    nameProfile.value = profileName.textContent;
    jobProfile.value = profileJob.textContent;
    openPopup(profilePopup);
}
function submitCardHandler(){
    createCardFromPopup();
    closePopup(cardPopup);
}
function createCard(cardName, cardImage){
    const cardTemplateElement = document.querySelector('#card-template').content.cloneNode(true);
    const card = cardTemplateElement.querySelector('.card');
    card.querySelector('.card__text').textContent = cardName;
    card.querySelector('.card__picture').alt = cardName;
    card.querySelector('.card__picture').src = cardImage;
    const cardLIkeButton =  card.querySelector('.card__like');
    cardLIkeButton.addEventListener('click', () => cardLIkeButton.classList.toggle('card__like_active'));
    card.querySelector('.card__delete').addEventListener('click', () => card.remove());
    card.querySelector('.card__picture').addEventListener('click', openPhotoPopup);
    cardsContainer.prepend(card);
}
function createCardFromPopup(){
    const cardName = cardNameInput.value;
    const cardLink = cardImageInput.value;
    createCard(cardName, cardLink);
    cardFormElement.reset();
}
function initCards(){
    cards.forEach((item) => {
        const cardName = item.name;
        const cardImage = item.link;
        createCard(cardName, cardImage);
    });
}
function closePopup(popup){
    if (popup !== null) {
        popup.classList.remove('popup_opened');
    }
}
function openPopup(popup){
    popup.classList.add('popup_opened');
}
function openPhotoPopup(e){
    const popupParagraph = photoPopup.querySelector('.popup__photo-paragraph');
    const popupImage = photoPopup.querySelector('.popup__photo-image');
    popupParagraph.textContent = e.target.alt;
    popupImage.src = e.target.src;
    popupImage.alt = e.target.alt;
    openPopup(photoPopup);
}
function openCardPopupHandler(){
    openPopup(cardPopup);
    cardFormElement.reset();
}
function closePopupHandlerEsc(e){
    const currentOpenedPopup = document.querySelector('.popup_opened');
    if((currentOpenedPopup) && (e.key === 'Escape')){
        closePopup(currentOpenedPopup);
  }
}
function closePopupHandlerMouseClick(e){
    const currentOpenedPopup = document.querySelector('.popup_opened');
    if((e.target.classList.contains('popup')) || (e.target.classList.contains('close-btn'))){
        closePopup(currentOpenedPopup);
    }
}

document.addEventListener('keydown', closePopupHandlerEsc);
document.addEventListener('mousedown', closePopupHandlerMouseClick);
profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileFormElement.addEventListener('submit', submitProfileHandler);
profileAddCardButton.addEventListener('click', openCardPopupHandler);
cardFormElement.addEventListener('submit', submitCardHandler);

const cards = [
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

initCards();

