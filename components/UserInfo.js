export default class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;
    };

    getUserInfo() {
        return {
            name: this._name,
            job: this._job,
        };
    }

    setUserInfo(userInfo) {
        this._name = userInfo.name;
        this._job = userInfo.job;
    };
}