import {Injectable} from '@angular/core';
import {COURSES} from '../shared/courses';
import {Course} from '../shared/course.model';

@Injectable()
export class CoursesService {
  public courses = COURSES;

  getCoursesList() {
    // return Promise.resolve(COURSES);
    return this.courses;
  }
  getCourseById(id: string) {
    return this.getCoursesList().find(course => course.id === id);
      // .then(courses => courses.find(course => course.id === id));
  }
  createCourse(course: Course) {
    Promise.resolve(COURSES).then((courses: Course[]) => courses.push(course));
  }
  updateCourse() {

  }
  // deleteCourse(course: Course){
  //   this.courses.splice(this.courses.indexOf(course.id), 1);
  // }
}
