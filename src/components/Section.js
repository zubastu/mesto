export default class Section {
    constructor({ renderer }, containerSelector) {
        this._data = '';
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    setData(data) {
        this._data = data;
    }

    renderArray() {
        this._data.forEach((dataItem) => {
            const element = this._renderer(dataItem);
            this._container.append(element)
        });
    };

    addItem(element) {
        this._container.prepend(element);
    };
}
