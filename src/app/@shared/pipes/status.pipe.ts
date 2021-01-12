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
              finalized: 'Finalizado',
              in_progress: 'En progreso',
              pending: 'Pendiente',
              resolved: 'Resuelto',
              daily: 'Diario',
              weekly: 'Semanal',
              monthly: 'Mensual',
              bimonthly: 'Bimensual',
              quarterly: 'Trimestral',
              biannual: 'Semestral',
              annual: 'Anual',
              unknown: 'Desconocido',
          };

          return status[value] ? status[value] : value;
      }
  }

}
