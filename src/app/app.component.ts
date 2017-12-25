import { Component, OnInit, DoCheck} from '@angular/core';
import { AuthService } from './services/authorization.service';
import { CoursesService } from './courses/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public showLogin = true;
  public courseCreation = false;
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
    this._coursesService.createCourse($event.value);
    this.courseCreation = false;
  }
  ngDoCheck() {
    this.showLogin = this._authService.getLoginState();
  }
}
