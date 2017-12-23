import {Injectable} from '@angular/core';
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
    return this.coursesPipe.transform(this.courses, this.queryString);
  }
  getCourseById(id: string) {
    return this.getCoursesList().find(course => course.id === id);
  }
  createCourse(course: Course) {
  }
  setQueryString(queryString: string) {
    console.log('COURSES SERVICE => set queryString:  ' + queryString);
    this.queryString = queryString;
    this.courses = this.coursesPipe.transform(this.courses, queryString);
  }
  getQueryString() {
    return this.queryString;
  }
  // filterCourses() {
  //
  // }
  updateCourse() {

  }
  // deleteCourse(course: Course){
  //   this.courses.splice(this.courses.indexOf(course.id), 1);
  // }
}
