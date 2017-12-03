import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/course.model';
import { Courses } from '../../shared/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: Course[]
  constructor() { }

  ngOnInit() {
    this.courses = Courses
  }
  removeCourse(course: Course) {
    // this.courses.splice(this.courses.indexOf(course), 1)
    console.log('remove Course!!!!!!!!!!!!!!')
  }
}
