import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { LoginComponent } from './courses/login/login.component';
import { NavbarComponent } from './courses/navbar/navbar.component';
import { ToolboxComponent } from './courses/toolbox/toolbox.component';
import { FooterComponent } from './courses/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
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
