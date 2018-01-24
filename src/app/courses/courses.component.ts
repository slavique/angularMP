import { Component, OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import { Course } from './shared/course.model';
import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  private courseDeletionSubscription: Subscription;
  private courseUpdateSubscription: Subscription;
  courses: Observable<Course[]>;
  selectedCourse: Course;
  editCourse = false;
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

  updateCourse($event) {
    console.log('update COURSE: ' + $event.value.id);
    this.courseUpdateSubscription = this.coursesService.updateCourse($event.value).subscribe(
      () => {
        console.log('COURSE UPDATED SUCCESSFULLY!!!');
        this.editCourse = false;
      }
    );
  }

  triggerEditing($event) {
    this.selectedCourse = $event.value;
    this.editCourse = true;
  }
  ngOnChanges() {
    console.log('COURSES => ngOnChanges hook!!');
  }
  ngDoCheck() {
    console.log('COURSES => ngDoCheck hook!!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit hook!!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked hook!!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit hook!!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked hook!!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy hook!!');
    if (this.courseDeletionSubscription) {
      this.courseDeletionSubscription.unsubscribe();
    }
    if (this.courseUpdateSubscription) {
      this.courseUpdateSubscription.unsubscribe();
    }
  }
}
