import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, maxLength = 20): unknown {
    if (value.length > maxLength) {
      return value.slice(0, maxLength) + '...'
    } 

    return value;
  }

}
