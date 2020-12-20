import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperMachinesService} from "../oper-machines.service";
import {ActivatedRoute} from "@angular/router";
import {OperMachine} from "../oper-machine";
import {OperMachinesFormComponent} from "../oper-machines-form/oper-machines-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-machines-create',
    templateUrl: './oper-machines-create.component.html',
    styleUrls: ['./oper-machines-create.component.scss']
})
export class OperMachinesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operMachineForm') operMachineForm: OperMachinesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operMachinesService: OperMachinesService,
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
        this.operMachineForm.operMachinesForm.valueChanges.subscribe((data) => {
            this.operMachinesService.operMachinesFormValid.next(this.operMachineForm.operMachinesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operMachinesService.createOperMachine();
        this.operMachinesService.operMachine = <OperMachine>{};
    }

}
