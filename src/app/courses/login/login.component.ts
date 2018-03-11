import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { LOGIN } from './../../reducers/general';

import { AuthService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected readonly storage = localStorage;
  isInvalidCredentials = false;

  constructor(
    private _authService: AuthService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit() {
  }

  login(username: string, password: string) {
    console.log('user: ' + username + ', ' + 'password: ' + password);
    const token = 1234;
    this._authService.login(username, password, token).subscribe(
      users => {
        const user = users.find((element) => {
            return element.name === username && element.password === password;
          // }
        });
        if (user) {
          console.log(`USERNAME: ${user.name}`);
          this.storage.setItem('userName', JSON.stringify(user.name));
          this.storage.setItem('token', JSON.stringify(user.id));
          this.router.navigate(['']);
          this.store.dispatch({type: LOGIN});
          this.isInvalidCredentials = false;
        } else {
          this.isInvalidCredentials = true;
        }
      },
      () => console.log(`USER NOT FOUND!!!!!!!!!!!!`)
    );
  }
}
