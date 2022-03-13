export default class Popup {
    constructor(selector) {
        this.popup = document.querySelector(selector);
    }

    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleCloseByEscape);
    }

    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleCloseByEscape);
    }

    setEventListeners() {
        this.popup.addEventListener('click', () => {
        if ((this.popup.classList.contains('popup_opened')) || (this.popup.classList.contains('close-btn'))) {
                this.popup.close()
            }
        })
    }

    _handleCloseByEscape(evt) {
        if (evt.key === 'Escape') {
            this.popup.close();
        }
    }
}
