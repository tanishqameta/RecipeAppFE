import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform<T>(value: T[], field: keyof T | '' | undefined, ascending: boolean = true): T[] {
    if(!Array.isArray(value) || value.length <= 1 || !field) {
      return value;
    }
    const k = ascending ? 1 : -1;
    return value.sort((a, b) => {
      if(a[field] == null) return k;
      if(b[field] == null) return -k;
      return a[field] < b[field] ? -k : k;
    });
  }
}
