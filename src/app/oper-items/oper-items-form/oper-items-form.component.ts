import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperItem} from "../oper-item";
import {FormGroup} from "@angular/forms";
import {OperItemsService} from "../oper-items.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-items-form',
    templateUrl: './oper-items-form.component.html',
    styleUrls: ['./oper-items-form.component.scss']
})
export class OperItemsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperItem = <OperItem>{};

    @ViewChild('operItemsForm') operItemsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'inventory_code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO INVENTARIO') + ' es obligatorio.'},
        ],
        'oper_corrective_maintenance_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO CORRECTIVOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operItemsService: OperItemsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setOperCorrectiveMaintenanceIds
    setOperCorrectiveMaintenanceIds(event: any) {
        let operCorrectiveMaintenanceIds = null;
        if (event.value.length) {
            operCorrectiveMaintenanceIds = [];
            for (let i = 0; i < event.value.length; i++) {
                operCorrectiveMaintenanceIds.push(event.value[i].id);
            }
        }
        this.operItemsService.operItem.oper_corrective_maintenance_ids = operCorrectiveMaintenanceIds;
    }
    // end setOperCorrectiveMaintenanceIds


}
