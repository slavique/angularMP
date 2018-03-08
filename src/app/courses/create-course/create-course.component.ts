import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Course } from '../shared/course.model';
import { authors } from '../shared/mock-data.model';
import {Router} from '@angular/router';
import {CoursesService} from '../services/courses.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  private courseCreationSubscription: Subscription;
  newCourse: Course;
  authors = authors;
  selectedDate: any;

  courseForm: FormGroup;

  @Output() create = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private _coursesService: CoursesService,
    private router: Router
  ) {
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
    this.courseCreationSubscription = this._coursesService.createCourse(this.newCourse).subscribe(
      () => {
        console.log('CREATION SUCCESSFUL!!!');
        this.router.navigate(['']);
      },
      error => console.log('CREATION FAILED!!!'),
      () => {
        console.log('CREATION COMPLETED!!!');
      }
    );

  }
}
