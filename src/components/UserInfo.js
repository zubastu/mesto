export default class UserInfo {
    constructor(data, handleClickAvatar) {
        this._name = document.querySelector(data.name);
        this._job = document.querySelector(data.job);
        this._avatar = document.querySelector(data.avatar);
        this._id = '';
        this._handleClickAvatar = handleClickAvatar;
    };

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    };
    
    initUserLoad(dataServer) {
        this._name.textContent = dataServer.name;
        this._job.textContent = dataServer.about;
        this._avatar.src = dataServer.avatar;
        this._id = dataServer._id;
    };

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.firstInput;
        this._job.textContent = userInfo.secondInput;
        this._id = userInfo._id;
    };

    setEventListeners() {
        this._avatar.addEventListener('click', this._handleClickAvatar);
    };

    setAvatar(avatarData) {
        this._avatar.src = avatarData.avatar;
    };

    setUserId(id) {
        this._id = id;
    };

    getUserId() {
        return this._id;
    };
};