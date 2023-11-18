// currency-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = `${value}₫`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formattedValue;
  }
}
