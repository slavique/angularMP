import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  public isLoginState: boolean;
  protected readonly storage = localStorage;

  public login(user: string, token: string): void {
    console.log('user: ' + user + ', ' + 'token: ' + token);
    this.storage.setItem('userName', JSON.stringify(user));
    this.storage.setItem('token', JSON.stringify(token));
  }

  public logout(): void {
    this.storage.removeItem('userName');
    this.storage.removeItem('token');
  }

  isAuthenticated() {
    return false;
  }

  getUserInfo() {

  }
  setLoginState() {
    console.log('AUTH SERVICE SET LOGIN STATE !!!!!!!!!!!!!!!');

    this.isLoginState = true;
  }
  getLoginState() {
    console.log('AUTH SERVICE GET LOGIN STATE !!!!!!!!!!!!!!!');

    return Observable.of(this.isLoginState);
  }
}
