import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoginState: boolean = true;
  public username: string;
  public password: string;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoginState = true;
  }

  login(username: string, password: string) {
    console.log('user: ' + username + ', ' + 'password: ' + password);
    this._authService.login(username, password);
  }
}
