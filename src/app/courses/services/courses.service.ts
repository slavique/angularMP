import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


import {COURSES} from '../shared/courses';
import {Course} from '../shared/course.model';
import {FilterCoursesPipe} from '../pipes/filterCourses.pipe';

@Injectable()
export class CoursesService {
  public courses = COURSES;
  public queryString: string;
  constructor(private coursesPipe: FilterCoursesPipe) {}

  getCoursesList() {
    console.log('COURSES SERVICE => get queryString:  ' + this.queryString);
    return Observable.of(this.coursesPipe.transform(this.courses, this.queryString));
  }
  createCourse(course: Course) {
    return Observable.of(this._addNewCourse(course));
  }
  setQueryString(queryString: string) {
    console.log('COURSES SERVICE => set queryString:  ' + queryString);
    this.queryString = queryString;
    this.courses = this.coursesPipe.transform(this.courses, queryString);
  }

  updateCourse(course: Course) {
    return Observable.of(this._updateCourse(course));
  }
  deleteCourse(course: Course) {
    return Observable.of(this.courses.splice(this.courses.indexOf(course), 1));
  }

  _addNewCourse(course: Course) {
    let newCourses: any;
    newCourses = this.courses;
    newCourses.push(course);
    this.courses = newCourses;
  }

  _updateCourse(course: Course) {
    let newCourses: any;
    newCourses = this.courses;
    newCourses[newCourses.indexOf(course.id)] = course;
    this.courses = newCourses;
  }
}
