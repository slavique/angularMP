import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Subscription} from 'rxjs/Subscription';
import { Course } from '../shared/course.model';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  title: string;
  description: string;
  course: Course;
  private courseUpdateSubscription: Subscription;

  constructor(
    private  router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.title = params.title;
      this.description = params.description;
      this.coursesService.getCourseById(params.id).subscribe(
        course => {
          this.course = course[0];
        }
      );
    });

  }
  editCourse() {
    this.courseUpdateSubscription = this.coursesService.updateCourse(this.course).subscribe(
      () => {
        console.log('COURSE UPDATED SUCCESSFULLY!!!');
        this.router.navigate(['']);
      }
    );
  }
}
