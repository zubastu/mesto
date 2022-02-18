class Card {
    constructor(card) {
        this._name = card.name;
        this._image = card.link;
    }

    _getTemplate() {
        const cardTemplate = document.getElementById('card-template').content;
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        return cardElement;
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
console.dir(newCard)