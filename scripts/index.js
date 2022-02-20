import Card from "./Card";
import FormValidator from "./FormValidator";


const validationOptions = [
    {
        formSelector: ".form",
        inputSelector: '.form__item',
        submitButtonSelector: '.submit-btn',
        inactiveButtonClass: 'submit-btn_disabled',
        inputErrorClass: 'form__item_type_error',
        errorClass: 'form__input-error_active'
    }
]

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

/*const page = document.querySelector('.page');*/
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


function submitProfileHandler( event ) {
    event.preventDefault();
    profileName.textContent = nameProfile.value;
    profileJob.textContent = jobProfile.value;
    closePopup( profilePopup );
}

function openProfilePopupShowDetails() {
    nameProfile.value = profileName.textContent;
    jobProfile.value = profileJob.textContent;

    openPopup( profilePopup );
}

function openCardPopupHandler() {
    openPopup(cardPopup);
    cardFormElement.reset();

}

function createCardFromPopup() {
    const card = {
        name: cardNameInput.value,
        image: cardImageInput.value,
    }
    const cardElement = new Card(card)
    addCard( cardElement );
}

function submitCardHandler( event ) {
    event.preventDefault();
    createCardFromPopup();
    closePopup(cardPopup);
    cardFormElement.reset();
}

function addCard( newCard ) {
    cardsContainer.prepend( newCard );
}

function closePopup( popup ) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
    /*    page.classList.remove('page_type_noScroll');*/
}

function openPopup( popup ) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
    /*    page.classList.add('page_type_noScroll');*/
}

function initCards() {
    cards.forEach( ( item ) => {
        const card = {
            name: item.name,
            image: item.link,
        }
        const cardElement = new Card(card)
        addCard( cardElement );
    });
}

function closeByEscape( evt ) {
    if ( evt.key === 'Escape' ) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup( openedPopup );
    }
}

popupList.forEach(( popup ) => {
    popup.addEventListener('click', ( evt ) => {
        if ( ( evt.target.classList.contains('popup_opened') ) || ( evt.target.classList.contains('close-btn') ) ) {
            closePopup( popup )
        }
    });
});

profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileFormElement.addEventListener('submit', submitProfileHandler);
profileAddCardButton.addEventListener('click', openCardPopupHandler);
cardFormElement.addEventListener('submit', submitCardHandler);

initCards();

