import {profileJob, profileName} from "../utils/constants";

export default class UserInfo {
    constructor(profileInfo) {
        this._name = profileInfo.name;
        this._job = profileInfo.job;
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
