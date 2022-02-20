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

export default Card
