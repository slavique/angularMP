import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authorization.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.isAuthenticated = this._authService.isAuthenticated()
  }
  showLoginPage() {
    console.log('NAVBAR COMPONENT showLoginPage!!!!!!!!!!!!!!!');
    this._authService.setLoginState();
  }
}
