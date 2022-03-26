export default class API {
    constructor(client) {
        this._client = client;
    }

    loadAllCards() {
        return this._client.get('cards');
    }

    createCard(card) {
        return this._client.post('cards', card);
    }

    deleteCard(id) {
        return this._client.delete('cards', id);
    }

    getUserInfo() {
        return this._client.get('users/me');
    }

    setUserInfo(data) {
        console.log(data)
        return this._client.patch('users/me', {
            name: data.name,
            about: data.about,
        })
    }

    getAvatar() {
        return this._client.get('users/me/avatar')
    }

    setAvatar(avatarData) {
        return this._client.patch('users/me/avatar', {
            avatar: avatarData.avatar
        })
    }

}