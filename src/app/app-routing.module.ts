import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCourseComponent } from './courses/create-course/create-course.component';
import {LoginComponent} from './courses/login/login.component';
import {CoursesComponent} from './courses/courses.component';
import {EditCourseComponent} from './courses/edit-course/edit-course.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'create',
    component: CreateCourseComponent
  },
  {
    path: 'edit',
    component: EditCourseComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
