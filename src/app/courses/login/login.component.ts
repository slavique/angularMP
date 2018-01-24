import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { AuthService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected readonly storage = localStorage;
  public isLoginState: boolean = true;
  @Output() close = new EventEmitter();


  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoginState = true;
  }

  login(username: string, password: string) {
    console.log('user: ' + username + ', ' + 'password: ' + password);
    const token = 1234;
    this._authService.login(username, password, token).subscribe(
      user => {
        console.log(`FROM HTTP:::: username: ${user.name}, password: ${user.password}`);
        this.isLoginState = false;
        this.close.emit();
        this.storage.setItem('userName', JSON.stringify(user.name));
        this.storage.setItem('token', JSON.stringify(user.id));
      },
      () => console.log(`USER NOT FOUND!!!!!!!!!!!!`)
    );
  }
}
