export default class Card {
    constructor(card, templateSelector, cardSelectors) {
        this._name = card.name;
        this._image = card.link;
        this._cardSelectors = cardSelectors;
        this._likes = card.likes;
        this._ownerId = card.owner._id;
        this.cardId = card._id;
        this._owner = card.owner;
        this._template = templateSelector;
        this.handleClick = card.handleClick;
        this.deleteHandleClick = card.deleteHandleClick;

    };

    _getTemplate() {
        const cardTemplate = document.querySelector(this._template).content;
        return cardTemplate.querySelector(this._cardSelectors.card).cloneNode(true);
    };

    generateCard() {
        this._cardElement = this._getTemplate();
        this.likeButton = this._cardElement.querySelector(this._cardSelectors.like);
        this.deleteButton = this._cardElement.querySelector(this._cardSelectors.delete);
        this.cardPicture = this._cardElement.querySelector(this._cardSelectors.picture);
        this.carText = this._cardElement.querySelector(this._cardSelectors.text);
        this.counterLikes = this._cardElement.querySelector(this._cardSelectors.counter);
        this._setEventListeners();
        this.cardPicture.src = this._image;
        this.cardPicture.alt = this._name;
        this.carText.textContent = this._name;
        return this._cardElement;
    };

    toggleLikeButton() {
        if (this._likes.length > 0) {
            this.counterLikes.textContent = this._likes.length;
        } else if (this._likes.length === 0) {
            this.likeButton.classList.remove('card__like_active');
            this.counterLikes.textContent = this._likes.length;
        }
        this._renderLikeButton();
    };

    _renderDeleteButton() {
        if (this._ownerId !== "a0e0e6e678e900e95b68fbd5") {
            this.deleteButton.remove();
        }
    }

    _renderLikeButton() {
        if (this._likes.length === 0) {
            this.counterLikes.classList.add('card__like-counter_disabled');
        } else {
            this.counterLikes.classList.remove('card__like-counter_disabled');
        }
    }

    _setEventListeners() {
        this.likeButton.addEventListener('click', () => {
            this.toggleLikeButton();
        });
        this.deleteButton.addEventListener('click', () => {
            this.deleteHandleClick(this.cardId);
        });
        this.cardPicture.addEventListener('click', () => {
            return this.handleClick(this._name, this._image);
        });
        this.toggleLikeButton();
        this._renderDeleteButton();

    };
};


