import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Course} from '../shared/course.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CoursesService {
  private coursesUrl = 'api/courses';  // URL to web api
  public courses = new BehaviorSubject<Course[]>([]);
  public coursesCast = this.courses.asObservable();

  constructor(
    private http: HttpClient,
  ) {}

  getCoursesList () {
    this.http.get<Course[]>(this.coursesUrl, httpOptions).subscribe(
      courses => this.courses.next(courses)
    );
  }
  searchCourses(term: string){
    if (!term.trim()) {
      return of([]);
    }
    this.http.get<Course[]>(`api/courses/?title=${term}`).subscribe(
      courses => this.courses.next(courses)
    );
  }
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course, httpOptions);
  }

  getCourseById(id: string) {
    return this.http.get<Course>(`api/courses/?id=${id}`);
  }

  updateCourse (course: Course): Observable<any> {
    return this.http.put(this.coursesUrl, course, httpOptions);
  }
  deleteCourse (course: Course): Observable<Course> {
    const id = course.id;
    const url = `${this.coursesUrl}/${id}`;

    return this.http.delete<Course>(url, httpOptions);
  }
}
