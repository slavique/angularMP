import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { AuthService } from './services/authorization.service';
import { CoursesService } from './courses/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }
}
