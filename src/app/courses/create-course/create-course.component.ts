import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Course } from '../shared/course.model';
import { authors } from '../shared/mock-data.model';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  newCourse: Course;
  authors = authors;
  selectedDate: any;

  courseForm: FormGroup;

  @Output() create = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.createCourseForm();
  }

  ngOnInit() {

  }

  createCourseForm() {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      duration: [null, Validators.required],
      authors: [null, Validators.required],
      id: Math.random().toString(),
      topRated: false,
      date: [new Date(), Validators.required]
    });
  }

  createCourse() {
    this.newCourse = this.courseForm.value;
    this.newCourse.date = this.courseForm.value.date.jsdate;
    this.create.emit({ value: this.newCourse });
  }
  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.newCourse); }
  // get diagnostic() { return JSON.stringify(this.courseForm.value); }
}
