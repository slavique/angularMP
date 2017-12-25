import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  public newCourse: Course;
  @Output() create = new EventEmitter();
  constructor() {
    this.newCourse = {
      title: '',
      description: '',
      duration: 0,
      id: Math.random().toString(),
      topRated: false,
      date: new Date()
    };
  }

  ngOnInit() {

  }
  createCourse() {
    this.create.emit({ value: this.newCourse });
  }
}
