import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, format: string): any {
    if (value && format) {
        return moment(value).format(format);
    }

    return value;
  }

}
