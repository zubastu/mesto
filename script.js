

const profilePopup = document.querySelector('.popup_profile');
const profilePopupCloseButton = document.querySelector('.close-btn_profile');
const profilePopupSubmit = document.getElementById('profile__form');
const profileInfoButton = document.querySelector('.profile__info-btn');
const profileAddCardButton = document.querySelector('.profile__add-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const photoPopup = document.querySelector('.popup_photo');
const photoPopupCloseButton = document.querySelector('.close-btn_photo');

const cardPopup = document.querySelector('.popup_card');
const cardsContainer = document.getElementById('cards-container');
const cardPopupSubmit = document.getElementById('card__form');
const cardPopupCloseButton = document.querySelector('.close-btn_card');

function profileSubmitHandler(event){
    event.preventDefault();
    let profileInputName = document.querySelector('.form__item_input_name-profile');
    let profileInputJob = document.querySelector('.form__item_input_job-profile');
    profileName.textContent = profileInputName.value;
    profileJob.textContent = profileInputJob.value;
    closePopup(profilePopup);
}
function profilePopupOpenShowDetails(){
    let profileInputName = document.querySelector('.form__item_input_name-profile');
    let profileInputJob = document.querySelector('.form__item_input_job-profile');
    profileInputName.value = profileName.textContent;
    profileInputJob.value = profileJob.textContent;
    openPopup(profilePopup);
}
function cardSubmitHandler(event){
    event.preventDefault();
    createCardFromPopup();
    closePopup(cardPopup);
}
function createCard(cardName, cardImage){
    const cardTemplateElement = document.querySelector('#card-template').content.cloneNode(true);
    const card = cardTemplateElement.querySelector('.card');
    card.querySelector('.card__text').textContent = cardName;
    card.querySelector('.card__picture').alt = cardName;
    card.querySelector('.card__picture').src = cardImage;
    let cardLIkeButton =  card.querySelector('.card__like');
    cardLIkeButton.addEventListener('click', () => cardLIkeButton.classList.toggle('card__like_active'));

    card.querySelector('.card__delete').addEventListener('click', () => card.remove());
    card.querySelector('.card__picture').addEventListener('click', openPhotoPopup);
    cardsContainer.append(card);
}
function createCardFromPopup(){
    let cardNameInput = cardPopup.querySelector('.form__item_input_name-card');
    let cardImageInput = cardPopup.querySelector('.form__item_input_link-card');
    let cardName = cardNameInput.value;
    let cardLink = cardImageInput.value;
    createCard(cardName, cardLink);
    cardNameInput = null;
    cardImageInput = null;
}

function initCards(){
    cards.forEach(function (item) {
        let cardName = item.name;
        let cardImage = item.link;
        createCard(cardName, cardImage);
    });
}

function closePopup(popup){
    popup.classList.toggle('popup_opened');
}
function openPopup(popup){
    popup.classList.toggle('popup_opened');
}
function openPhotoPopup(e){
    let popupParagraph = photoPopup.querySelector('.popup__photo-paragraph');
    let popupImage = photoPopup.querySelector('.popup__photo-image');
    popupParagraph.textContent = e.target.alt;
    popupImage.src = e.target.src;
    openPopup(photoPopup)
}

profileInfoButton.addEventListener('click', profilePopupOpenShowDetails);
profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));
profilePopupSubmit.addEventListener('submit', profileSubmitHandler);

profileAddCardButton.addEventListener('click', () => openPopup(cardPopup));
cardPopupSubmit.addEventListener('submit', cardSubmitHandler);
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));
photoPopupCloseButton.addEventListener('click', () => closePopup(photoPopup));




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
