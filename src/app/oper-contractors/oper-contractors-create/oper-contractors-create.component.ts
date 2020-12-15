import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperContractorsService} from "../oper-contractors.service";
import {ActivatedRoute} from "@angular/router";
import {OperContractor} from "../oper-contractor";
import {OperContractorsFormComponent} from "../oper-contractors-form/oper-contractors-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-contractors-create',
    templateUrl: './oper-contractors-create.component.html',
    styleUrls: ['./oper-contractors-create.component.scss']
})
export class OperContractorsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operContractorForm') operContractorForm: OperContractorsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operContractorsService: OperContractorsService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ionViewWillEnter() {
       this.splitPanel.show.next(true);
    }

    ngAfterViewInit() {
        this.operContractorForm.operContractorsForm.valueChanges.subscribe((data) => {
            this.operContractorsService.operContractorsFormValid.next(this.operContractorForm.operContractorsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operContractorsService.createOperContractor();
        this.operContractorsService.operContractor = <OperContractor>{};
    }

}
