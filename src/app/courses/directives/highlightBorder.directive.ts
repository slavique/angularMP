import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]'
})
export class BorderHighlightDirective {
  currentDate: any = new Date();
  constructor(private el: ElementRef) {
  }
  @Input() set courseDate(date: any) {
    if (this.currentDate > date && (this.currentDate - date) <= (1000 * 60 * 60 * 24 * 14)) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (this.currentDate < date) {
      this.el.nativeElement.style.borderColor = 'blue';
    } else {
      this.el.nativeElement.style.borderStyle = 'hidden';
    }
  }
}
