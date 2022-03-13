export default class UserInfo {
    constructor(profileSelectors) {
        this._name = profileSelectors.name;
        this._job =profileSelectors.job;
    }

    getUserInfo() {
        return {
            name: this._name,
            job: this._job,
        }
    }

    setUserInfo(userInfo) {
        this._name = userInfo.name;
        this._job = userInfo.job;
    }
}