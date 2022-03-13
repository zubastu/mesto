import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(card, dataSelectors) {
        super(dataSelectors.popup);
        this._name = this.popup.querySelector(dataSelectors.popupDescription);
        this._image = this.popup.querySelector(dataSelectors.popupImage);
        this._alt = this._name;
    }

    open(card) {
        super.open()
        this._name = card._name;
        this._image = card._image;
        this._alt = card._alt;
    }
}