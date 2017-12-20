import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/authorization.service';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { LoginComponent } from './courses/login/login.component';
import { NavbarComponent } from './courses/navbar/navbar.component';
import { ToolboxComponent } from './courses/toolbox/toolbox.component';
import { FooterComponent } from './courses/footer/footer.component';

import { BorderHighlightDirective } from './courses/directives/highlightBorder.directive';
import { FormatDurationPipe } from './courses/pipes/formatDuration.pipe';
import { OrderByPipe } from './courses/pipes/orderBy.pipe';




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    LoginComponent,
    NavbarComponent,
    ToolboxComponent,
    FooterComponent,
    BorderHighlightDirective,
    FormatDurationPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
