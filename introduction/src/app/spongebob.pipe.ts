import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
export class SpongebobPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let result = '';
    for (let letter of value) {
      const randomNumber = Math.ceil(Math.random() * 2);
      if (randomNumber === 2) {
        result += letter.toUpperCase();
      } else {
        result += letter.toLowerCase();  
      }
    }
    return result;
  }

}
