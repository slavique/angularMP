import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  @Input('selectedCourse') selectedCourse: Course;
  @Output() update = new EventEmitter();
  constructor() {}

  ngOnInit() {

  }
  editCourse() {
    console.log('EDIT COURSE: ' + this.selectedCourse.title);
    this.update.emit({ value: this.selectedCourse });
  }
}
