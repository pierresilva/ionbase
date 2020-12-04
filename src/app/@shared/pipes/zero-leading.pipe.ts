import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroLeading'
})
export class ZeroLeadingPipe implements PipeTransform {

  transform(value: any, size: number = 8): string {
      if ((value === null) || (value === '')) {
          return '';
      } else {
          value = value.toString();
          while (value.length < size) value = "0" + value;
          return value;
      }
  }

}
