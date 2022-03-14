import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(dataSelectors) {
        super(dataSelectors.popup);
        this._name = this.popup.querySelector(dataSelectors.popupDescription);
        this._image = this.popup.querySelector(dataSelectors.popupImage);
    }

    open(card) {
        this._name.textContent = card._name;
        this._image.src = card._image;
        this._image.alt = card._name;
        super.open()
    }
}