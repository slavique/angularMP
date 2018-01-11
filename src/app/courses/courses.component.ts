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
  private getCoursesSubscription: Subscription;
  private courseDeletionSubscription: Subscription;
  private courseUpdateSubscription: Subscription;
  private getCoursesObservable: Observable<any>;
  private courseDeletionObservable: Observable<any>;
  private courseUpdateObservable: Observable<any>;
  public courses: Course[];
  public selectedCourse: Course;
  public editCourse = false;
  constructor(
    public coursesService: CoursesService,
  ) { }

  ngOnInit() {
    this.getCoursesObservable = this.coursesService.getCoursesList();
    this.getCoursesSubscription = this.getCoursesObservable.subscribe(
      courses => this.courses = courses,
      error => console.log('OBSERVABLE FAILED!!!'),
      () => {
        console.log('OBSERVABLE COMPLETED!!!');
      }
    );
  }



  deleteCourse($event) {
    console.log('delete COURSE: ' + $event.value.id);
    this.courseDeletionObservable = this.coursesService.deleteCourse($event.value);
    this.courseDeletionSubscription = this.courseDeletionObservable.subscribe(
      result => console.log('COURSE DELETED SUCCESSFULLY!!!'),
      error => console.log('DELETION FAILED!!!'),
      () => {
        console.log('DELETION COMPLETED!!!');
      }
    );
  }
  updateCourse($event) {
    console.log('update COURSE: ' + $event.value.id);

    this.courseUpdateObservable = this.coursesService.updateCourse($event.value);
    this.courseUpdateSubscription = this.courseUpdateObservable.subscribe(
      () => {
        console.log('COURSE UPDATED SUCCESSFULLY!!!');
        this.editCourse = false;
      },
      error => console.log('UPDATE FAILED!!!'),
      () => {
        console.log('UPDATE COMPLETED!!!');
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
    // this.getCoursesObservable = this.coursesService.getCoursesList();
    this.getCoursesSubscription = this.getCoursesObservable.subscribe(
      courses => this.courses = courses,
      error => console.log('OBSERVABLE FAILED!!!'),
      () => {
        console.log('OBSERVABLE COMPLETED!!!');
      }
    );
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
    this.getCoursesSubscription.unsubscribe();
    if (this.courseDeletionSubscription) {
      this.courseDeletionSubscription.unsubscribe();
    }
    if (this.courseUpdateSubscription) {
      this.courseUpdateSubscription.unsubscribe();
    }
  }
}
