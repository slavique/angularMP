import { Component, OnInit, DoCheck} from '@angular/core';
import { AuthService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  private title = 'app';
  public showLogin: boolean = true;
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log('APP COMPONENT NG DO CHECK!!!!');
    this.showLogin = this._authService.getLoginState();
  }
}
