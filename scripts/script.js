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
const errorSpanElements = document.querySelectorAll('.form__input-error');
const inputs = document.querySelectorAll('.form__item');

function clearErrorMessages() {
    const inputEvent = new KeyboardEvent('input');
    inputs.forEach(( input ) => {
        input.dispatchEvent( inputEvent );
        input.classList.remove('form__item_type_error');
    });
    errorSpanElements.forEach(( span ) => {
        span.textContent = '';
    });
}

function submitProfileHandler( event ) {
    event.preventDefault();
    profileName.textContent = nameProfile.value;
    profileJob.textContent = jobProfile.value;
    closePopup( profilePopup );
}

function openProfilePopupShowDetails() {
    nameProfile.value = profileName.textContent;
    jobProfile.value = profileJob.textContent;
    clearErrorMessages()
    openPopup( profilePopup );
}

function createCardFromPopup() {
    const cardName = cardNameInput.value;
    const cardImage = cardImageInput.value;
    const cardElement = createCard( cardName, cardImage )
    addCard( cardElement );
}

function openCardPopupHandler() {
    openPopup(cardPopup);
    cardFormElement.reset();
    clearErrorMessages();
}

function submitCardHandler( event ) {
    event.preventDefault();
    createCardFromPopup();
    closePopup(cardPopup);
    cardFormElement.reset();
}

const createCard = ( cardName, cardImage ) => {
    const cardTemplateElement = document.querySelector('#card-template').content.cloneNode(true);
    const cardElement = cardTemplateElement.querySelector('.card');
    cardElement.querySelector('.card__text').textContent = cardName;
    cardElement.querySelector('.card__picture').alt = cardName;
    cardElement.querySelector('.card__picture').src = cardImage;
    cardElement.querySelector('.card__like').addEventListener('click', toggleLikeButton);
    cardElement.querySelector('.card__delete').addEventListener('click', deleteCard);
    cardElement.querySelector('.card__picture').addEventListener('click', openPhotoPopup);
    return cardElement;
}

function addCard( newCard ) {
    cardsContainer.prepend( newCard );
}

function toggleLikeButton() {
    this.classList.toggle('card__like_active');
}

function deleteCard() {
    this.parentNode.remove();
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
        const cardName = item.name;
        const cardImage = item.link;
        const cardElement = createCard( cardName, cardImage )
        addCard( cardElement );
    });
}

function openPhotoPopup() {
    popupPhotoParagraph.textContent = this.alt;
    popupPhotoImage.src = this.src;
    popupPhotoImage.alt = this.alt;
    openPopup( photoPopup );
}

function closeByEscape( evt ) {
    if ( evt.key === 'Escape' ) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup( openedPopup );
    }
}

popupList.forEach(( popup ) => {
    popup.addEventListener('click', ( evt ) => {
        if ( evt.target.classList.contains('popup_opened') ) {
            closePopup( popup )
        }
        if ( evt.target.classList.contains('close-btn') ) {
            closePopup( popup )
        }
    });
});

profileInfoButton.addEventListener('click', openProfilePopupShowDetails);
profileFormElement.addEventListener('submit', submitProfileHandler);
profileAddCardButton.addEventListener('click', openCardPopupHandler);
cardFormElement.addEventListener('submit', submitCardHandler);



initCards();

