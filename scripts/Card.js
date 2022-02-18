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

class Card{
    constructor(card, cardSelector) {
        this._title = card.name;
        this._image = card.link;
        this.isliked = cardSelector.likeButtonSelector;

    }

    _getTemplate(cardSelector){
        const cardTemplate = document.querySelector(cardSelector.templateSelector).content.querySelector(cardSelector.cardSelector).cloneNode(true);
        return cardTemplate;
    }

    _generateCard(cardSelector) {
        this._card = this._getTemplate();
        this._card.querySelector()
        return this._card;
    }

    like(cardSelector) {
        this.isliked.classList.toggle(cardSelector.likeButtonActiveClass);
    }
}

const card = new Card(cards, cardSelectors)

const cardSelectors = {
    templateSelector: '.template-card',
    cardSelector: '.card',
    titleSelector: '.card__text',
    imageSelector: '.card__picture',
    likeButtonSelector: '.card__like',
    likeButtonActiveClass: 'card__like_active',
    deleteCardButtonSelector: '.card__delete'
}

