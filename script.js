const popupList = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_profile');
const profileFormElement = document.forms.profile;
const profileInfoButton = document.querySelector('.profile__info-btn');
const profileAddCardButton = document.querySelector('.profile__add-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const photoPopup = document.querySelector('.popup_photo');
const nameProfile = profileFormElement.elements.profileName;
const jobProfile = profileFormElement.elements.profileJob;

const cardPopup = document.querySelector('.popup_card');
const cardsContainer = document.getElementById('cards-container');
const cardFormElement = document.forms.card;
const cardNameInput = cardFormElement.elements.cardName;
const cardImageInput = cardFormElement.elements.cardUrl;

const popupPhotoParagraph = photoPopup.querySelector('.popup__photo-paragraph');
const popupPhotoImage = photoPopup.querySelector('.popup__photo-image');

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
function addCard(cardElement){
    cardsContainer.prepend(cardElement);
}
const createCard = (cardName, cardImage) => {
    const cardTemplateElement = document.querySelector('#card-template').content.cloneNode(true);
    const cardElement = cardTemplateElement.querySelector('.card');
    cardElement.querySelector('.card__text').textContent = cardName;
    cardElement.querySelector('.card__picture').alt = cardName;
    cardElement.querySelector('.card__picture').src = cardImage;
    const cardLIkeButton =  cardElement.querySelector('.card__like');
    cardLIkeButton.addEventListener('click', () => cardLIkeButton.classList.toggle('card__like_active'));
    cardElement.querySelector('.card__delete').addEventListener('click', () => cardElement.remove());
    cardElement.querySelector('.card__picture').addEventListener('click', openPhotoPopup);
    return cardElement;
}

function createCardFromPopup(){
    const cardName = cardNameInput.value;
    const cardImage = cardImageInput.value;
    const cardElement = createCard(cardName, cardImage)
    addCard(cardElement);
    cardFormElement.reset();
}

function initCards(){
    cards.forEach((item) => {
        const cardName = item.name;
        const cardImage = item.link;
        const cardElement = createCard(cardName, cardImage)
        addCard(cardElement);
    });
}

function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}
function openPopup(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}
function openPhotoPopup(e){
    popupPhotoParagraph.textContent = e.target.alt;
    popupPhotoImage.src = e.target.src;
    popupPhotoImage.alt = e.target.alt;
    openPopup(photoPopup);
}
function openCardPopupHandler(){
    openPopup(cardPopup);
    cardFormElement.reset();
}
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('close-btn')) {
            closePopup(popup)
        }
    });
});

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

