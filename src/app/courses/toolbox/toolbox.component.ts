import { Component, Output, EventEmitter, OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy} from '@angular/core';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Output() outputEvent = new EventEmitter();
  public searchString: string;
  constructor(
    public coursesService: CoursesService
  ) { }
  findCourse() {
    console.log('FIND COURSE: ' + this.searchString);
    this.coursesService.searchCourses(this.searchString);
  }
  addCourse() {
    this.outputEvent.emit({type: 'addCourse'});
  }
  ngOnChanges() {
    // console.log('ngOnChanges hook!!');
  }

  ngOnInit() {
    // console.log('ngOnInit hook!!');
  }
  ngDoCheck() {
    // console.log('ngDoCheck hook!!');
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit hook!!');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked hook!!');
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit hook!!');
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked hook!!');
  }
  ngOnDestroy() {
    // console.log('ngOnDestroy hook!!');
  }
}
