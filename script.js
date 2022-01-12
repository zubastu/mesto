
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

function profileSubmitHandler(){
    profileName.textContent = nameProfile.value;
    profileJob.textContent = jobProfile.value;
    closePopup(profilePopup);
}

function profilePopupOpenShowDetails(){
    nameProfile.value = profileName.textContent;
    jobProfile.value = profileJob.textContent;
    openPopup(profilePopup);
    document.addEventListener('keydown', closePopupHandlerEsc);
}

function cardSubmitHandler(){
    createCardFromPopup();
    closePopup(cardPopup);
}

function createCardElement(cardName, cardImage){
    const cardTemplateElement = document.querySelector('#card-template').content.cloneNode(true);
    const card = cardTemplateElement.querySelector('.card');
    card.querySelector('.card__text').textContent = cardName;
    card.querySelector('.card__picture').alt = cardName;
    card.querySelector('.card__picture').src = cardImage;
    let cardLIkeButton =  card.querySelector('.card__like');
    cardLIkeButton.addEventListener('click', () => cardLIkeButton.classList.toggle('card__like_active'));
    card.querySelector('.card__delete').addEventListener('click', () => card.remove());
    card.querySelector('.card__picture').addEventListener('click', openPhotoPopup);
    return card;
}

function createCard(card){
    console.log(createCardElement)
    cardsContainer.prepend(card);
}

function createCardFromPopup(){
    let cardNameInput = cardFormElement.elements.cardName;
    let cardImageInput = cardFormElement.elements.cardUrl;
    const cardName = cardNameInput.value;
    const cardLink = cardImageInput.value;
    createCardElement(cardName, cardLink);
    cardFormElement.reset();
}

function initCards(){
    cards.forEach((item) => {
        const cardName = item.name;
        const cardImage = item.link;
        createCardElement(cardName, cardImage);
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
    let popupParagraph = photoPopup.querySelector('.popup__photo-paragraph');
    let popupImage = photoPopup.querySelector('.popup__photo-image');
    popupParagraph.textContent = e.target.alt;
    popupImage.src = e.target.src;
    openPopup(photoPopup);

}
function openCardPopupHandler(){
    openPopup(cardPopup);
    cardFormElement.reset();

}

function closePopupHandlerEsc(e){
    const currentOpenedPopup = document.querySelector('.popup_opened');
    currentOpenedPopup.addEventListener('keydown', closePopupHandlerEsc);
    if((currentOpenedPopup) && (e.key === 'Escape')){
        closePopup(currentOpenedPopup);
        document.removeEventListener('keydown', closePopupHandlerEsc);
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
profileInfoButton.addEventListener('click', profilePopupOpenShowDetails);
profileFormElement.addEventListener('submit', profileSubmitHandler);
profileAddCardButton.addEventListener('click', openCardPopupHandler);
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

