import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(dataSelectors, submitHandler) {
        super(dataSelectors.popup);
        this._form = this.popup.querySelector(dataSelectors.formSelector);
        this._inputList = Array.from(this._form.querySelectorAll(dataSelectors.inputSelector));
        this._submitHandler = submitHandler;
    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValues());
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
}