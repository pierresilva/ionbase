import {Pipe, PipeTransform} from '@angular/core';
import {StorageLocalService} from "../services/storage-local.service";

@Pipe({
    name: 'getParameter'
})
export class GetParameterPipe implements PipeTransform {

    constructor(
        private storageLocal: StorageLocalService
    ) {
    }

    transform(value: string): string {

        if (value && value != '') {
            const parameters = this.storageLocal.get('parameters');

            if (!parameters) {
                return '';
            }

            for (let i = 0; i < parameters.length; i++) {
                if (parameters[i].code === value) {
                    return parameters[i].value;
                }
            }

        }

        return '';
    }

}
