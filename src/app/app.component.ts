import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
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
  private courseCreationObservable: Observable<any>;
  private getLoginStateObservable: Observable<any>;
  showLogin = true;
  courseCreation = false;
  constructor(
    private _authService: AuthService,
    private _coursesService: CoursesService
  ) { }

  ngOnInit() {
  }
  showCreateForm() {
    this.courseCreation = true;
  }
  createCourse($event) {
    this.courseCreationObservable = this._coursesService.createCourse($event.value);
    this.courseCreationSubscription = this.courseCreationObservable.subscribe(
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
  ngDoCheck() {
    this.getLoginStateObservable = this._authService.getLoginState();
    this.getLoginStateSubscription = this.getLoginStateObservable.subscribe(
      result => this.showLogin = result,
      error => console.log('GETTING LOGIN STATE FAILED!!!'),
      () => {
        console.log('GETTING LOGIN STATE COMPLETED!!!');
      }
    );
  }
  ngOnDestroy() {
    this.courseCreationSubscription.unsubscribe();
    this.getLoginStateSubscription.unsubscribe();
  }
}
