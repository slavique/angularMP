import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})

export class FormatDurationPipe implements PipeTransform {
  private hours: string;
  private minutes: string;
  transform(duration: number) {
    this.hours = duration >= 60 ? Math.floor(duration / 60) + 'h' : '';
    this.minutes = duration % 60 > 0 ? duration % 60 + 'min' : '';
    return `${this.hours} ${this.minutes}`;
  }
}
