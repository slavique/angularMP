import { Component, OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  public searchString: string;
  constructor() { }

  ngOnChanges() {
    console.log('ngOnChanges hook!!');
  }

  ngOnInit() {
    console.log('ngOnInit hook!!');
  }
  ngDoCheck() {
    console.log('ngDoCheck hook!!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit hook!!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked hook!!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit hook!!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked hook!!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy hook!!');
  }

  findCourse() {
    console.log('FIND COURSE: ' + this.searchString);
  }
}
