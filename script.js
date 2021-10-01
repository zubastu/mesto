
const formProfileElement = document.querySelector('.form__profile')
const nameInput = document.querySelector('.form__item_input_name-profile');
const jobInput = document.querySelector('.form__item_input_job-profile');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
//обьявления popup
const popupProfile = document.querySelector('.popup__profile');
const popupCard = document.querySelector('.popup__card');
const popupPhoto =document.querySelector('.popup__photo');
//обьявления кнопок
const closeButtonProfile = popupProfile.querySelector('.close-btn__profile');
const closeButtonCard = popupCard.querySelector('.close-btn__card');
const closeButtonPhoto = popupPhoto.querySelector('.close-btn__photo')
const profileButton = document.querySelector('.profile__info-btn');
const profileAddButtonElement = document.querySelector('.profile__add-btn');

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

    //Клонирование узла и присвоение id
    const newCardElement = document.querySelector('#card-template').content.cloneNode(true);
    const cardElement = newCardElement.querySelector('.card');
    cardElement.id = cardId;

    //Изменение контента название
    const cardName = cardElement.querySelector('.card__text');
    cardName.textContent = cardItem.name;

    //Изменение контента картинки
    const cardImage = cardElement.querySelector('.card__picture');
    cardImage.src = cardItem.link;

    //Работа кнопки лайк
    const likeButtonElement = cardElement.querySelector('.card__like');
    likeButtonElement.addEventListener('click', () => onLikeClick(cardId));
    
    function onLikeClick () {
        likeButtonElement.classList.toggle('card__like_active');
    }
    cardsSectionElement.append(newCardElement);

    //Работа кнопки удалить
    const removeCardButton = cardElement.querySelector('.card__delete');
    removeCardButton.addEventListener('click', removeCard);

    function removeCard () {
        cardElement.remove();
    }
    //Добавление карточки при нажатии


    //открытие popup__card
    cardImage.addEventListener('click', () => popupOpened(popupPhoto));


}



//Определение количества карт в массиве, присвоение id, вызов добавления карточек после определения.
function initCards (cards) {
    const cardsSectionElement = document.querySelector('#cards-container');
    for (i = 0; i < cards.length; i++) {
        const cardInfo = cards[i];
        const cardId = `card-id_${i}`;
        addCard(cardId, cardInfo, cardsSectionElement);
    }
}

//Фукции popup закрыть, открыть, запретить скролл

function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

function popupOpened (popup) {
    popup.classList.add('popup_opened');
}


//Сохранение значений из формы в popup + закрытие
function formSubmitHandler (evt) {
    evt.preventDefault();
    let name = document.querySelector('.profile__name');
    let job = document.querySelector('.profile__job');
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupClose(popupProfile);
}

//Открытие popup с изменением текстового контента
function profileOpenCopy () {
    let name = document.querySelector('.form__item_input_name-profile');
    let job = document.querySelector('.form__item_input_job-profile');
    let nameInput = document.querySelector('.profile__name');
    let jobInput = document.querySelector('.profile__job');
    name.value = nameInput.textContent;
    job.value = jobInput.textContent;
    popupOpened(popupProfile);
}


//Слушатели событий
formProfileElement.addEventListener('submit', formSubmitHandler);
closeButtonProfile.addEventListener('click', () => popupClose(popupProfile));
closeButtonCard.addEventListener('click', () => popupClose(popupCard));
closeButtonPhoto.addEventListener('click', () => popupClose(popupPhoto));
profileButton.addEventListener('click', profileOpenCopy);
profileAddButtonElement.addEventListener('click', () => popupOpened(popupCard));


//Вызов добавления карточек
initCards(cards);