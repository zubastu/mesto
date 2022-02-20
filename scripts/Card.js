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
class Card {
    constructor(card) {
        this._name = card.name;
        this._image = card.link;
        this._alt = card.name;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector('.template-card').content;
        return cardTemplate.querySelector('.card').cloneNode(true);
    }

    deleteCard() {
        this._cardElement.remove()
    }

    toggleLikeButton() {
        this._cardElement.querySelector('.card__like').classList.toggle('card__like_active');
        console.log(this._cardElement)
        console.log(this)
    }

    openPhotoPopup() {
        popupPhotoParagraph.textContent = this._alt;
        popupPhotoImage.src = this._image;
        popupPhotoImage.alt = this._name;
        openPopup(photoPopup);
    }

    _setEventListeners() {
        this._cardElement.querySelector('.card__like').addEventListener('click', () => {
            this.toggleLikeButton();
        });
        this._cardElement.querySelector('.card__delete').addEventListener('click', () => {
            this.deleteCard();
        });
        this._cardElement.querySelector('.card__picture').addEventListener('click', () => {
            this.openPhotoPopup();
        });
    }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._setEventListeners()
        this._cardElement.querySelector('.card__picture').src = this._image;
        this._cardElement.querySelector('.card__picture').alt = this._name;
        this._cardElement.querySelector('.card__text').textContent = this._name;
        return this._cardElement;
    }

}


cards.forEach( (card) => {
   const newCard = new Card(card).generateCard();
   cardsContainer.append(newCard);
});

function openPopup( popup ) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
    /*    page.classList.add('page_type_noScroll');*/
}

