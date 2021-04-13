import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Platform} from "@ionic/angular";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {VisiVisitorsService} from "../visi-visitors.service";
import {VisiVisitor} from "../visi-visitor";
import {FormGroup} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-visi-visitors-user-send',
    templateUrl: './visi-visitors-user-send.component.html',
    styleUrls: ['./visi-visitors-user-send.component.scss'],
})
export class VisiVisitorsUserSendComponent implements OnInit {

    @Input('model') model: VisiVisitor = <VisiVisitor>{};
    @ViewChild('visiVisitorsForm') visiVisitorsForm: FormGroup;
    public id: any = null;

    public validationMessages = {
        'full_name': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'identification': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('IDENTIFICACIÓN') + ' es obligatorio.'},
        ],
        'email': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('EMAIL') + ' es obligatorio.'},
        ],
        'phone': [
            {type: 'required', message: 'El campo ' + this.toTitleCase.transform('TELÉFONO') + ' es obligatorio.'},
        ],
    };

    constructor(
        public visiVisitorsService: VisiVisitorsService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService,
        private toTitleCase: TitleCasePipe,
    ) {
    }

    ngOnInit() {
        // this.clearVisiVisitors();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.visiVisitorsService.editVisiVisitors(this.id);
        } else {
            this.visiVisitorsService.clearVisiVisitor();
        }

        // this.setHouseUnitId();
        // this.setUserId();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.setHouseUnitId();
    }

    clearVisiVisitors() {
        console.log('clear');
        this.visiVisitorsService.createVisiVisitors();
        this.visiVisitorsService.visiVisitor.next(<VisiVisitor>{});
    }

    setHouseUnitId() {
        console.log(this.visiVisitorsService.visiVisitor.value, this.visiVisitorsService.userHousUnit.value, this.visiVisitorsService.authService.getUser('id'));
        const model = this.visiVisitorsService.visiVisitor.value;
        model.hous_unit_id = this.visiVisitorsService.userHousUnit.value.id;
        model.user_id = this.visiVisitorsService.authService.getUser('id');

        console.log('model to visiVisitor.next', model);

        this.visiVisitorsService.visiVisitor.next(model);
    }

    setUserId() {
        this.visiVisitorsService.visiVisitor.value.user_id = this.visiVisitorsService.authService.getUser('id');
    }

}
