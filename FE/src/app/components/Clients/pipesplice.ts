// short-description.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords'
})
export class LimitWordsPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    const words = value.split(' ');
    const truncatedDescription = words.slice(0, limit).join(' ');
    return truncatedDescription + '...';
  }
}
