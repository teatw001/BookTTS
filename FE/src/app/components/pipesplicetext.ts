// truncate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, words: number, additionalChars: number): string {
    const wordArray = value.split(' ');

    // Calculate the total length of characters to display
    const displayLength = words + additionalChars;

    if (wordArray.length > words) {
      return (
        wordArray.slice(0, words).join(' ') +
        (value.length > displayLength ? '...' : '')
      );
    }
    return value;
  }
}
