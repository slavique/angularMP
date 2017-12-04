import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }         from '@angular/forms';


import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/courses/course/course.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    CoursesComponent,
    CourseComponent,
    LoginComponent,
    NavbarComponent,
    ToolboxComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
