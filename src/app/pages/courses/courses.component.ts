import { Component, OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';
import { Course } from '../../shared/course.model';
import { Courses } from '../../shared/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  public courses: Course[];
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit hook!!");
    this.courses = Courses;
  }

  deleteCourse($event) {
    console.log('delete COURSE: ' + $event.value.id);
    this.courses.splice(this.courses.indexOf($event.value), 1)
  }
  ngOnChanges() {
    console.log("ngOnChanges hook!!");
  }
  ngDoCheck() {
    console.log("ngDoCheck hook!!");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit hook!!");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked hook!!");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit hook!!");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked hook!!");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy hook!!");
  }

}
