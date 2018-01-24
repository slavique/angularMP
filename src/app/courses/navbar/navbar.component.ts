import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  @Output() outputEvent = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
  }
  showLoginPage() {
    console.log('NAVBAR COMPONENT showLoginPage!!!!!!!!!!!!!!!');
    this.outputEvent.emit();
  }
}
