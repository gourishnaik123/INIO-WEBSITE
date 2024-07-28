// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter || !filter.destinationName) {
      return items;
    }

    return items.filter(item => 
      item.destinationName.toLowerCase().includes(filter.destinationName.toLowerCase())
    );
  }
}
