import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../shared/course.model';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input('course') course: Course;
  @Output() deletion = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  removeCourse() {
    if (window.confirm('Do you really want to delete this course?')) {
      this.deletion.emit({value: this.course});
    }
  }
  editCourse() {
    const course: NavigationExtras = {
      queryParams: this.course
    };
    this.router.navigate(['edit'], course);
  }
}
