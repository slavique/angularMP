import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  public isLoginState: boolean;

  logIn() {

  }

  logOut() {

  }

  isAuthenticated() {
    return false
  }

  getUserInfo() {

  }
  setLoginState(){
    console.log('AUTH SERVICE SET LOGIN STATE !!!!!!!!!!!!!!!');

    this.isLoginState = true;
  }
  getLoginState(){
    console.log('AUTH SERVICE GET LOGIN STATE !!!!!!!!!!!!!!!');

    return this.isLoginState;
  }
}
