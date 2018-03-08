import { Component } from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent  {
  public searchString: string;
  constructor(
    public coursesService: CoursesService,
    private router: Router
  ) { }
  findCourse() {
    console.log('FIND COURSE: ' + this.searchString);
    this.coursesService.searchCourses(this.searchString);
  }
  addCourse() {
    this.router.navigate(['create']);
  }
}
