export default class Client {
    constructor(url, headers) {
        this._url = url;
        this._headers = headers;
    };

    _renderPromise(promise) {
        return promise
            .then((res) => {
               if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((obj) => {
                return obj;
            });
    };

    get(type) {
        const promise = fetch(`${this._url}/${type}`, {
            method: 'GET',
            headers: this._headers
        });
        return this._renderPromise(promise);
    };

    post(type, item) {
        const promise = fetch(`${this._url}/${type}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: item.name,
                link: item.link,
                image: item.image
            })
        });
        return this._renderPromise(promise);
    };

    patch(type, keys) {
        const promise = fetch(`${this._url}/${type}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(keys)
        });
        return this._renderPromise(promise);
    };

    delete(type) {
        const promise = fetch(`${this._url}/${type}`, {
            method: 'DELETE',
            headers: this._headers
        });
        return this._renderPromise(promise);
    };

    put(type) {
        const promise = fetch(`${this._url}/${type}`, {
            method: 'PUT',
            headers: this._headers
        });
        return this._renderPromise(promise);
    };
};