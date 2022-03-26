import PopupWithForm from "./PopupWithForm.js";

export default class PopupWithHideInput extends PopupWithForm {
    constructor(dataSelectors, submitHandler) {
        super(dataSelectors, submitHandler);
        this._submitHandler = submitHandler;
        this._hideInput = this._form.querySelector(dataSelectors.hideInputSelector);
    }

    _getInputValue() {
        return this._hideInput.value;
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValue());
        })
    }
}