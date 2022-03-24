export default class Card {
    constructor(card, templateSelector, boolean, cardSelectors) {
        this._name = card.name;
        this._image = card.link;
        this._boolean = boolean;
        this._cardSelectors = cardSelectors;
        this._liked = [];
        this.template = templateSelector;
        this.handleClick = card.handleClick;
        this.deleteHandleClick = card.deleteHandleClick;
    };

    _getTemplate() {
        const cardTemplate = document.querySelector(this.template).content;
        return  cardTemplate.querySelector(this._cardSelectors.card).cloneNode(true);
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

    deleteCard() {
        this._cardElement.remove();
    };

    toggleLikeButton() {
        if (!this.likeButton.classList.contains('card__like_active')) {
            this.likeButton.classList.add('card__like_active');
            this._liked.push(1);
            this.counterLikes.textContent = this._liked.length;
        } else if (this.likeButton.classList.contains('card__like_active')) {
            this._liked.pop();
            this.likeButton.classList.remove('card__like_active');
            this.counterLikes.textContent = this._liked.length;
        }
        this._renderLikeButton();
    };

    _renderDeleteButton() {
        if (!this._boolean) {
            this.deleteButton.remove();
        }
    }

    _renderLikeButton() {
        if (this._liked.length === 0) {
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
            this.deleteHandleClick();
        });
        this.cardPicture.addEventListener('click', () => {
            return this.handleClick(this._name, this._image);
        });
        this._renderDeleteButton();
        this._renderLikeButton();
    };
};


