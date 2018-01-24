import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { AuthService } from './services/authorization.service';
import { CoursesService } from './courses/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  private courseCreationSubscription: Subscription;
  private getLoginStateSubscription: Subscription;
  authState = false;
  showLogin = false;
  courseCreation = false;
  constructor(
    private _coursesService: CoursesService
  ) { }

  ngOnInit() {
  }
  processToolboxEvent($event) {
    if ($event.type === 'addCourse') {
      this.courseCreation = true;
    }
  }
  createCourse($event) {
    this.courseCreationSubscription = this._coursesService.createCourse($event.value).subscribe(
      () => {
        console.log('CREATION SUCCESSFUL!!!')
        this.courseCreation = false;
      },
      error => console.log('CREATION FAILED!!!'),
      () => {
        console.log('CREATION COMPLETED!!!');
      }
    );
  }
  showLoginScreen() {
    console.log('SHOW LOGIN SCREEEENNNN!!!!!');
    this.authState = false;
    this.showLogin = true;
  }
  closeLoginScreen() {
    console.log('CLOSE LOGIN SCREEEENNNN!!!!!');
    this.authState = true;
    this.showLogin = false;
  }
  ngDoCheck() {
  }
  ngOnDestroy() {
    this.courseCreationSubscription.unsubscribe();
    this.getLoginStateSubscription.unsubscribe();
  }
}
