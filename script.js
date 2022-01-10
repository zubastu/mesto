
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

function profileSubmitHandler(event){
    event.preventDefault();
    const name = profileFormElement.elements.profileName;
    const job = profileFormElement.elements.profileJob;
    profileName.textContent = name.value;
    profileJob.textContent = job.value;
    closePopup(profilePopup);
}
function profilePopupOpenShowDetails(){
    const name = profileFormElement.elements.profileName;
    const job = profileFormElement.elements.profileJob;
    name.value = profileName.textContent;
    job.value = profileJob.textContent;
    openPopup(profilePopup);
}
function cardSubmitHandler(e){
    e.preventDefault();
    createCardFromPopup();
    closePopup(cardPopup);
}
function createCard(cardName, cardImage){
    const cardTemplateElement = document.querySelector('#card-template').content.cloneNode(true);
    const card = cardTemplateElement.querySelector('.card');
    card.querySelector('.card__text').textContent = cardName;
    card.querySelector('.card__picture').alt = cardName;
    card.querySelector('.card__picture').src = cardImage;
    cardsContainer.prepend(card);
}
function createCardFromPopup(){
    let cardNameInput = cardFormElement.elements.cardName;
    let cardImageInput = cardFormElement.elements.cardUrl;
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
    popup.classList.remove('popup_opened');
}
function openPopup(popup){
    popup.classList.add('popup_opened');
}
function openPhotoPopup(e){
    let popupParagraph = photoPopup.querySelector('.popup__photo-paragraph');
    let popupImage = photoPopup.querySelector('.popup__photo-image');
    popupParagraph.textContent = e.target.alt;
    popupImage.src = e.target.src;
    openPopup(photoPopup);
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
function deleteCardHandler(e){
    if(e.target.classList.contains('card__delete')){
        e.target.parentElement.remove();
    }
}
function likeButtonClickHandler(e){
    if(e.target.classList.contains('card__like')){
        e.target.classList.toggle('card__like_active');
    }
}
function openPhotoPopupHandler(e){
    if(e.target.classList.contains('card__picture')){
        openPhotoPopup(e);
    }
}
cardsContainer.addEventListener('click', openPhotoPopupHandler);
cardsContainer.addEventListener('click', deleteCardHandler);
cardsContainer.addEventListener('click', likeButtonClickHandler);
document.addEventListener('keydown', closePopupHandlerEsc);
document.addEventListener('click', closePopupHandlerMouseClick);
profileInfoButton.addEventListener('click', profilePopupOpenShowDetails);
profileFormElement.addEventListener('submit', profileSubmitHandler);
profileAddCardButton.addEventListener('click', () => openPopup(cardPopup));
cardFormElement.addEventListener('submit', cardSubmitHandler);

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

