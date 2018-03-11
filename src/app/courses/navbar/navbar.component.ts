import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LOGOUT } from '../../reducers/general';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  buttonText = 'Log In';

  constructor(
    private router: Router,
    private store: Store<any>
  ) {
    store.select<any>('isAuthenticated').subscribe((data) => {
      this.isAuthenticated = data ? data : false;
      this.buttonText = this.isAuthenticated ? 'Log Out' : 'Log In';
    });
  }

  ngOnInit() {
  }

  showLoginPage() {
    if (!this.isAuthenticated) {
      this.router.navigate(['/login']);
    } else {
      this.store.dispatch({type: LOGOUT});
    }
  }
  navigateToCourses() {
    this.router.navigate(['']);
  }
}
