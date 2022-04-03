
export default class Card {
    constructor(card, templateSelector, cardSelectors, userId) {
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
        this._deleteLike = card.removeLike
        this._setLike = card.setLike;
        this._handleLikesChanged = this._handleLikesChanged.bind(this);
    };

    _checkId(userId) {
        return this._likes.some(function (id) {
            return userId === id._id;
        })
    }

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
        this._renderLikeCounter();
        this._renderLikeButton();
        this._renderDeleteButton();
        return this._cardElement;
    };

    _renderDeleteButton() {
        if (this._ownerId !== this._userId) {
            this.deleteButton.remove();
        }
    }

    _renderLikeButton() {
        if (this._checkId(this._userId)) {
            this.likeButton.classList.add('card__like_active');
        } else {
            this.likeButton.classList.remove('card__like_active');
        }
    }

    _renderLikeCounter() {
        this.counterLikes.textContent = this._likes.length;
        if (this._likes.length === 0) {
            this.counterLikes.classList.add('card__like-counter_disabled');
        } else {
            this.counterLikes.classList.remove('card__like-counter_disabled');
        }
    }

    toggleLikeButton() {
        if (this._checkId(this._userId)) {
            this._deleteLike(this.cardId, this._handleLikesChanged).catch((err) => {
                console.log(err);
            });
        } else {
            this._setLike(this.cardId, this._handleLikesChanged).catch((err) => {
                console.log(err);
            });
        }
    };

    _handleLikesChanged(likes) {
        this._likes = likes;
        this._renderLikeCounter()
        this._renderLikeButton()
    }

    _setEventListeners() {
        this.likeButton.addEventListener('click', () => {
            this.toggleLikeButton();
        });
        this.deleteButton.addEventListener('click', () => {
            this.deleteHandleClick(this);
        });
        this.cardPicture.addEventListener('click', () => {
            return this.handleClick(this._name, this._image);
        });
    };

    delete() {
        this._cardElement.remove();
    }
};


