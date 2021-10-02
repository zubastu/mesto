//Обьявление элементов профиля
const profileSubmit = document.getElementById('profile__form');
const nameInput = document.querySelector('.form__item_input_name-profile');
const jobInput = document.querySelector('.form__item_input_job-profile');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
//обьявления popup
const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card');
const popupPhoto =document.querySelector('.popup_photo');
//обьявления кнопок
const closeButtonProfile = popupProfile.querySelector('.close-btn_profile');
const closeButtonCard = popupCard.querySelector('.close-btn_card');
const closeButtonPhoto = popupPhoto.querySelector('.close-btn_photo');
const profileInfoButton = document.querySelector('.profile__info-btn');
const profileAddButtonElement = document.querySelector('.profile__add-btn');
const popupCardSubmitElement = document.getElementById('card__form');
const cardContainer = document.querySelector('.photo-cards');
//обьявление элементов popup card
const cardNameInput = popupCard.querySelector('.form__item_input_name-card');
const cardLinkInput = popupCard.querySelector('.form__item_input_link-card');
//Обьявление элементов popupPhoto
const popupPhotoImage = document.querySelector('.popup__photo-image');
const popupPhotoParagraph = document.querySelector('.popup__photo-paragpaph');

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



function initCardTextElement(cardElement, card) {
    const cardTextElement = cardElement.querySelector('.card__text');
    cardTextElement.textContent = card.name;
}

function initCardPictureElement(cardElement, card) {
    const cardPictureElement = cardElement.querySelector('.card__picture');
    cardPictureElement.alt = card.name;
    cardPictureElement.src = card.link;
    cardPictureElement.addEventListener('click', () => showCardDetails(card));
}

function initButtonsElements(cardElement) {
    const likeButtonElement = cardElement.querySelector('.card__like');
    likeButtonElement.addEventListener('click', (event) => {
        likeButtonElement.classList.toggle('card__like_active');
    });
    //Работа кнопки удалить
    const removeCardButton = cardElement.querySelector('.card__delete');
    removeCardButton.addEventListener('click', (event) => {
        cardElement.remove();
    });
}

function createNewCard (card) {
    //нахожу шаблон карточки
    const cardTemplate = document.querySelector('#card-template').content;
    //клонирую содержимое шаблона
    const newCardElement = cardTemplate.querySelector('.card').cloneNode(true);

    initCardTextElement(newCardElement, card);
    initCardPictureElement(newCardElement, card);
    initButtonsElements(newCardElement);
    return newCardElement;
}

cards.forEach(function(item){
    const newCard = createNewCard(item);
    cardContainer.append(newCard);
})

//Фукции popup закрыть, открыть

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openPopup (popup) {
    popup.classList.add('popup_opened');
}

//Сохранение значений из формы в popup + закрытие
function formProfileSubmitHandler (event) {
    event.preventDefault();
    const name = document.querySelector('.profile__name');
    const job = document.querySelector('.profile__job');
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popupProfile);
}

//Открытие popup с изменением текстового контента
function profileOpenCopy () {
    const name = document.querySelector('.form__item_input_name-profile');
    const job = document.querySelector('.form__item_input_job-profile');
    const nameInput = document.querySelector('.profile__name');
    const jobInput = document.querySelector('.profile__job');
    name.value = nameInput.textContent;
    job.value = jobInput.textContent;
    openPopup(popupProfile);
} 

function getPopupCard() {
    const name = cardNameInput.value;
    const link = cardLinkInput.value;
    return {
        name: name,
        link: link
    };
}
function popupCardClear() {
    cardNameInput.value = null;
    cardLinkInput.value = null;
    closePopup(popupCard);
}

function сreateNewCardHandle(event) {
    event.preventDefault();
    // получить информацию по карточке из попапа
    const card = getPopupCard();
    // создать новую карточку с этой информацией
    const newCardElement = createNewCard(card);
    cardContainer.append(newCardElement);
    popupCardClear();
}

function showCardDetails(card) {
    //Передать параметры карточки в попап
    popupPhotoParagraph.textContent = card.name
    popupPhotoImage.src = card.link;
    //отобразить попап
    openPopup(popupPhoto);
}



//Слушатели событий
profileAddButtonElement.addEventListener('click', () => openPopup(popupCard));

profileSubmit.addEventListener('submit', formProfileSubmitHandler);

profileInfoButton.addEventListener('click', profileOpenCopy);

closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));
closeButtonCard.addEventListener('click', () => closePopup(popupCard));
closeButtonPhoto.addEventListener('click', () => closePopup(popupPhoto));


popupCardSubmitElement.addEventListener('submit', сreateNewCardHandle);

//Вызов добавления карточек
createNewCard(cards);