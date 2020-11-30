import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
      if ((value === null) || (value === '')) {
          return '';
      } else {

          const status = {
              active: 'Activo',
              inactive: 'Inactivo',
              hold: 'En espera',
              unknown: 'Desconocido'
          };

          return status[value] ? status[value] : value;
      }
  }

}
