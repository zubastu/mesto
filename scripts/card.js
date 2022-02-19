class Card {
    constructor(card) {
        this._name = card.name;
        this._image = card.link;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector('.template-card').content;
        return cardTemplate.querySelector('.card').cloneNode(true);
    }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardElement.querySelector('.card__picture').src = this._image;
        this._cardElement.querySelector('.card__text').textContent = this._name;
        return this._cardElement;
    }
}
const testCard = {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}
const newCard = new Card(testCard).generateCard();
document.getElementById('cards-container').append(newCard);