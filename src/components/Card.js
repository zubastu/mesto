import API from "./API.js";
import Client from "./Client.js";

export default class Card {
    constructor(card, templateSelector, cardSelectors, userId, deleteLike, useLike) {
        this._name = card.name;
        this._image = card.link;
        this._cardSelectors = cardSelectors;
        this._likes = card.likes;
        this._ownerId = card.owner._id;
        this.cardId = card._id;
        this._template = templateSelector;
        this.handleClick = card.handleClick;
        this.deleteHandleClick = card.deleteHandleClick;
        this._userId = userId;
        this._api = new API(new Client('https://mesto.nomoreparties.co/v1/cohort-38', {
            authorization: 'fc656d80-9f90-48b6-9907-1de866c0eaf7',
            'Content-Type': 'application/json',
            'Accept': 'application/json: charset=utf-8'
        }))
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

    _renderDeleteButton() {
        if (this._ownerId !== this._userId) {
            this.deleteButton.remove();
        }
    }

    _checkId(userId) {
        return this._likes.some(function (id) {
            return userId === id._id;
        })
    }

    _renderLikeButton() {
        if (this._checkId(this._userId)) {
            this.likeButton.classList.add('card__like_active');
        } else {
            this.likeButton.classList.remove('card__like_active');
        }
    }

    toggleLikeButton() {
        if (this._checkId(this._userId)) {
            this.likeButton.classList.remove('card__like_active');
            this._api.removeLike(this.cardId).then((data) => {
                this._likes = data.likes;
                this._renderLikeCounter()
            })
        } else if (!this._checkId(this._userId)) {
            this.likeButton.classList.add('card__like_active');
            this._api.useLike(this.cardId).then((data) => {
                this._likes = data.likes;
                this._renderLikeCounter()
            })
        }
    };

    _renderLikeCounter() {
        this.counterLikes.textContent = this._likes.length;
        if (this._likes.length === 0) {
            this.counterLikes.classList.add('card__like-counter_disabled');
        } else {
            this.counterLikes.classList.remove('card__like-counter_disabled');
        }
    }

    _setEventListeners() {
        this.likeButton.addEventListener('click', () => {
            this.toggleLikeButton(this._userId);
        });
        this.deleteButton.addEventListener('click', () => {
            this.deleteHandleClick(this.cardId);
        });
        this.cardPicture.addEventListener('click', () => {
            return this.handleClick(this._name, this._image);
        });
        this._renderLikeCounter()
        this._renderLikeButton()
        this._renderDeleteButton()
    };
};


