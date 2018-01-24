import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface User {
  name: string;
  password: string;
  id: number;
}

@Injectable()
export class AuthService {
  private usersUrl = 'api/users';  // URL to web api
  protected readonly storage = localStorage;

  constructor(
    private http: HttpClient
  ) {}

  public login(username: string, password: string, id: number): Observable<User> {
    console.log('user: ' + username + ', ' + 'password: ' + password + ', token: ' + id);
    return this.getUser(id);
  }

  getUser(token: number): Observable<User> {
    const url = `${this.usersUrl}/${token}`;
    return this.http.get<User>(url, httpOptions);
  }

  public logout(): void {
    this.storage.removeItem('userName');
    this.storage.removeItem('token');
  }

}
