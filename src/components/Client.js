export default class Client {
    constructor(url, headers) {
        this._url = url;
        this._headers = headers;
    }

    _renderPromise(promise) {
        return promise
            .then((res) => {
               if (res.ok) {
                    return res.json();
                }
                throw 'Error in GET promise'
            })
            .then((obj) => {
                return obj;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    get(type) {
        const promise = fetch(`${this._url}/${type}`, {
            method: 'GET',
            headers: this._headers
        });
        return this._renderPromise(promise);
    }

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
    }

    delete(type, id) {
        const promise = fetch(`${this._url}/${type}/${id}`, {
            method: 'DELETE',
            headers: this._headers
        });
        return this._renderPromise(promise);
    }

    patch(type, keys) {
        const promise = fetch(`${this._url}/${type}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(keys)
        });
        return this._renderPromise(promise);
    }

}