export default class Card {
    constructor(card, templateSelector, boolean) {
        this._name = card.name;
        this._image = card.link;
        this._boolean = boolean;
        this.template = templateSelector;
        this.handleClick = card.handleClick;
        this.deleteHandleClick = card.deleteHandleClick;
    };

    _getTemplate() {
        const cardTemplate = document.querySelector(this.template).content;
        return  cardTemplate.querySelector('.card').cloneNode(true);
    };

    generateCard() {
        this._cardElement = this._getTemplate();
        this.likeButton = this._cardElement.querySelector('.card__like');
        this.deleteButton = this._cardElement.querySelector('.card__delete');
        this.cardPicture = this._cardElement.querySelector('.card__picture');
        this.carText = this._cardElement.querySelector('.card__text');
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
        this.likeButton.classList.toggle('card__like_active');
    };

    _renderDeleteButton() {
        if (!this._boolean) {
            this.deleteButton.remove();
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
        this._renderDeleteButton()
    };
};


