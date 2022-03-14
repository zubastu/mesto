import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(dataSelectors) {
        super(dataSelectors.popup);
        this._name = this.popup.querySelector(dataSelectors.popupDescription);
        this._image = this.popup.querySelector(dataSelectors.popupImage);
    }

    open(name, link) {
        this._name.textContent = name;
        this._image.src = link;
        this._image.alt = name;
        super.open()
    }
}