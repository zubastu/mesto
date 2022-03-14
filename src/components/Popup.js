export default class Popup {
    constructor(selector) {
        this.popup = document.querySelector(selector);
        this._handleCloseByEscape = this._handleCloseByEscape.bind(this);
    };

    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleCloseByEscape);
    };

    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleCloseByEscape);
    };

    setEventListeners() {
        this.popup.addEventListener('mousedown', (e) => {
        if ((e.target.classList.contains('popup_opened')) || (e.target.classList.contains('close-btn'))) {
                this.close();
            }
        });
    };

    _handleCloseByEscape(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };
};
