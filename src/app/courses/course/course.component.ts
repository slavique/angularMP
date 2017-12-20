import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input('course') course: Course;
  @Output() deletion = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  removeCourse() {
    if (window.confirm('Do you really want to delete this course?')) {
      this.deletion.emit({value: this.course});
    }
  }
}
