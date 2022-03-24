export default class UserInfo {
    constructor(data, handleClickAvatar) {
        this._name = document.querySelector(data.name);
        this._job = document.querySelector(data.job);
        this._avatar = document.querySelector(data.avatar);
        this._handleClickAvatar = handleClickAvatar;
    };

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.firstInput;
        this._job.textContent = userInfo.secondInput;
    };

    setEventListeners() {
        this._avatar.addEventListener('click', this._handleClickAvatar)
    }
}