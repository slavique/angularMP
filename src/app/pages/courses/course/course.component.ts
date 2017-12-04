import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../shared/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input('course') course: Course;
  @Output('deletion') courseDeletion = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  removeCourse() {
    this.courseDeletion.emit({value: this.course});
  }
}
