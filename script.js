
const formElement = document.querySelector('.form-profile')

const nameInput = document.querySelector('.form-profile__item_input_name');
const jobInput = document.querySelector('.form-profile__item_input_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');

const closeButton = document.querySelector('.form-profile__close-button');
const profileButton = document.querySelector('.profile__info-btn');
const popupProfile = document.querySelector('.popup__profile');
const popupCard = document.querySelector('.popup__card');
const popupOpen = document.querySelector('.popup_opened');

const cardsContainer = document.querySelector('.photo-cards');

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

function addCard (cardId, cardItem, cardsSectionElement) {
    const newCardElement = document.querySelector('#card-template').content.cloneNode(true);
    const cardElement = newCardElement.querySelector('.card');
    cardElement.id = cardId;

    const cardName = cardElement.querySelector('.card__text');
    cardName.textContent = cardItem.name;

    const cardImage = cardElement.querySelector('.card__picture');
    cardImage.src = cardItem.link;

    const likeButtonElement = cardElement.querySelector('.card__like');
    likeButtonElement.addEventListener('click', () => onLikeClick(cardId));
    
    function onLikeClick () {
        likeButtonElement.classList.toggle('card__like_active');
    }
    cardsSectionElement.append(newCardElement);

    const removeCardButton = cardElement.querySelector('.card__delete');
    removeCardButton.addEventListener('click', removeCard);

    function removeCard () {
        cardElement.remove();
    }   
}

function initCards (cards) {
    const cardsSectionElement = document.querySelector('#cards-container');
    for (i = 0; i < cards.length; i++) {
        const cardInfo = cards[i];
        const cardId = `card-id_${i}`;
        addCard(cardId, cardInfo, cardsSectionElement);
    }
}



function popupOpened () {
    document.querySelector('.popup').classList.add('popup_opened');
}

function popupClose() {
    document.querySelector('.popup').classList.remove('popup_opened');
}



function formSubmitHandler (evt) {
    evt.preventDefault();
    let name = document.querySelector('.profile__name');
    let job = document.querySelector('.profile__job');
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupClose();
}

function profileOpenCopy () {
    let name = document.querySelector('.form__item_input_name');
    let job = document.querySelector('.form__item_input_job');
    let nameInput = document.querySelector('.profile__name');
    let jobInput = document.querySelector('.profile__job');
    name.value = nameInput.textContent;
    job.value = jobInput.textContent;
    popupOpened();
}

formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', popupClose);
profileButton.addEventListener('click', profileOpenCopy);

initCards(cards);