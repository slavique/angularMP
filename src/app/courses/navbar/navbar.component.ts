import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  showLoginPage() {
    this.router.navigate(['/login']);
  }
  navigateToCourses() {
    this.router.navigate(['']);
  }
}
