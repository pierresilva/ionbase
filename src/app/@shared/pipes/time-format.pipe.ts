import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: any, format: string): any {
    if (value && format) {
        return moment(value, 'HH:mm:ss').format(format);
    }

    return value;
  }

}
