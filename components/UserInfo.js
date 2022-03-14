export default class UserInfo {
    constructor(data) {
        this._name = document.querySelector(data.name);
        this._job = document.querySelector(data.job);
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
}