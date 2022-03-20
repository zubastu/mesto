
export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._data = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    renderArray() {
        this._data.forEach((dataItem) => {
            const element = this._renderer(dataItem);
            this.addItem(element);
        });
    };

    addItem(element) {
        this._container.prepend(element);
    };
}
