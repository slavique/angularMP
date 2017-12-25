import { Component, OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';
import { Course } from './shared/course.model';
import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  public courses: Course[];
  public selectedCourse: Course;
  public editCourse = false;
  constructor(
    public coursesService: CoursesService,
  ) { }

  ngOnInit() {
    console.log('ngOnInit hook!!');
    this.courses = this.coursesService.getCoursesList();
  }

  deleteCourse($event) {
    console.log('delete COURSE: ' + $event.value.id);
    this.coursesService.deleteCourse($event.value);
  }
  updateCourse($event) {
    console.log('update COURSE: ' + $event.value.id);
    this.coursesService.updateCourse($event.value);
    this.editCourse = false;
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
    this.courses = this.coursesService.getCoursesList();
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
  }
}
