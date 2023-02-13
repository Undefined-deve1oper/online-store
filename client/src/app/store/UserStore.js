import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
        localStorage.setItem("isLoggedIn", "true");
    }
    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
}
