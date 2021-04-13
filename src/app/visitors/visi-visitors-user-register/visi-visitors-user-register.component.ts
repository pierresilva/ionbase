import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {VisiVisitorRegisterService} from "../visi-visitor-register.service";
import {ActivatedRoute} from "@angular/router";
import {Platform} from "@ionic/angular";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {TitleCasePipe} from "@angular/common";
import {FormGroup} from "@angular/forms";
import {VisiVisitorRegister} from "../visi-visitor-register";

@Component({
    selector: 'app-visi-visitors-user-register',
    templateUrl: './visi-visitors-user-register.component.html',
    styleUrls: ['./visi-visitors-user-register.component.scss'],
})
export class VisiVisitorsUserRegisterComponent implements OnInit {

    @Input('model') model: VisiVisitorRegister = <VisiVisitorRegister>{};
    @ViewChild('visiVisitorRegistersForm') visiVisitorRegistersForm: FormGroup;

    public visiVisitorId: any = null;

    public validationMessages = {
        'entry_date': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('FECHA DE ENTRADA') + ' es obligatorio.'},
        ],
        'approved_by': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('APROBADO POR') + ' es obligatorio.'},
        ],
    };

    constructor(
        public visiVisitorRegisterService: VisiVisitorRegisterService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService,
        private toTitleCase: TitleCasePipe,
    ) {
    }

    ngOnInit() {
        this.visiVisitorId = this.route.snapshot.paramMap.get('visiVisitorId');
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.visiVisitorId = this.route.snapshot.paramMap.get('visiVisitorId');
        this.setVisiVisitorId();
        this.setHouseUnitId();
        this.setVisiVisitorRegisterApprovedBy();
        console.log(this.visiVisitorRegisterService.visiVisitorRegister);
    }

    setHouseUnitId() {
        this.visiVisitorRegisterService.visiVisitorRegister.hous_unit_id = this.visiVisitorRegisterService.userHousUnit.value.id;
    }

    setVisiVisitorId() {
        this.visiVisitorRegisterService.visiVisitorRegister.visi_visitor_id = this.visiVisitorId;
    }

    setVisiVisitorRegisterApprovedBy() {
        this.visiVisitorRegisterService.visiVisitorRegister.approved_by = this.visiVisitorRegisterService.authService.getUser('name');
    }

}
