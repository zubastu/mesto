export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._data = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderArray() {
        this._data.forEach((dataItem) => {
            this._renderer(dataItem);
        })
    }

    addItem(element) {
        this._container.append(element);
    }
}