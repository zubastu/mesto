export default class Card {
    constructor(card) {
        const defaultClickHandler = () => console.log(`On click is not defined. card=${JSON.stringify(this._cardElement)}`);
        this._name = card.name;
        this._image = card.link;
        this._alt = card.name;
        this.handleClick = card.handleClick || defaultClickHandler;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector('.template-card').content;
        return cardTemplate.querySelector('.card').cloneNode(true);
    }

    deleteCard() {
        this._cardElement.remove();
    }

    toggleLikeButton() {
        this._cardElement.querySelector('.card__like').classList.toggle('card__like_active');
    }

    _setEventListeners() {
        this._cardElement.querySelector('.card__like').addEventListener('click', () => {
            this.toggleLikeButton();
        });
        this._cardElement.querySelector('.card__delete').addEventListener('click', () => {
            this.deleteCard();
        });
        this._cardElement.querySelector('.card__picture').addEventListener('click', () => {
            this.handleClick(this);
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


