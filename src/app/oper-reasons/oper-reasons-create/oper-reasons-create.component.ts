import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperReasonsService} from "../oper-reasons.service";
import {ActivatedRoute} from "@angular/router";
import {OperReason} from "../oper-reason";
import {OperReasonsFormComponent} from "../oper-reasons-form/oper-reasons-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-reasons-create',
    templateUrl: './oper-reasons-create.component.html',
    styleUrls: ['./oper-reasons-create.component.scss']
})
export class OperReasonsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operReasonForm') operReasonForm: OperReasonsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operReasonsService: OperReasonsService,
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
        this.operReasonForm.operReasonsForm.valueChanges.subscribe((data) => {
            this.operReasonsService.operReasonsFormValid.next(this.operReasonForm.operReasonsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operReasonsService.createOperReason();
        this.operReasonsService.operReason = <OperReason>{};
    }

}
