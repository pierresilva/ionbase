import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {OperReason} from "../oper-reason";
import {FormGroup} from "@angular/forms";
import {OperReasonsService} from "../oper-reasons.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-oper-reasons-form',
    templateUrl: './oper-reasons-form.component.html',
    styleUrls: ['./oper-reasons-form.component.scss']
})
export class OperReasonsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: OperReason = <OperReason>{};

    @ViewChild('operReasonsForm') operReasonsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'oper_corrective_maintenance_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('OPERATIVIDAD MTTO CORRECTIVOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public operReasonsService: OperReasonsService,
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
        this.operReasonsService.operReason.oper_corrective_maintenance_ids = operCorrectiveMaintenanceIds;
    }
    // end setOperCorrectiveMaintenanceIds


}
