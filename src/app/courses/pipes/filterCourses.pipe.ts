import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCourses'
})

export class FilterCoursesPipe implements PipeTransform {
  transform(allCourses: any[], query: string) {
    if (query) {
      return allCourses.filter((course) => course.title === query);
    }else {
      return allCourses;
    }
  }
}
