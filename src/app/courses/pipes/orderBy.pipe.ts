import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(allCourses: any[], sortParameter: string) {
    if (sortParameter === 'creationDate') {
      return allCourses.sort((a: any, b: any) =>  a.date - b.date );
    }
  }
}
