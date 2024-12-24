import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  standalone: true
})
export class FilterByPipe implements PipeTransform {

  transform<T>(array: T[], fieldOrFilterMethod: keyof T | ((item: T, values: any[]) => boolean), values: any[]): T[] {
    if(!values || values.length === 0) return array;
    
    if(typeof fieldOrFilterMethod === 'string') {
      const field = fieldOrFilterMethod as keyof T;
      return array.filter(
        item => values.includes(item[field])
      );
    } else {
      const filterMethod = fieldOrFilterMethod as (item: T, values: any[]) => boolean;
      return array.filter(
        item => filterMethod(item, values)
      );
    }
  }

}
