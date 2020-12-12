import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subjectFilter'
})
export class SubjectFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => {
    //  item.title.indexOf(filter.title) !== -1
    console.log(item);
    });
}
}
