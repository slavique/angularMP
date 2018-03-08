import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import { Course } from './shared/course.model';
import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  private courseDeletionSubscription: Subscription;
  courses: Observable<Course[]>;
  constructor(
    public coursesService: CoursesService,
  ) { }

  ngOnInit() {
    this.courses = this.coursesService.coursesCast;
    this.coursesService.getCoursesList();
  }

  deleteCourse($event): void {
    console.log('delete COURSE: ' + $event.value.id);
    const course = $event.value;
    this.coursesService.deleteCourse(course).subscribe(
      () => this.coursesService.getCoursesList()
    );
  }
  ngOnDestroy() {
    console.log('ngOnDestroy hook!!');
    if (this.courseDeletionSubscription) {
      this.courseDeletionSubscription.unsubscribe();
    }
  }
}
