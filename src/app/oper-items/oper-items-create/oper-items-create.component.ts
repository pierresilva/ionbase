import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperItemsService} from "../oper-items.service";
import {ActivatedRoute} from "@angular/router";
import {OperItem} from "../oper-item";
import {OperItemsFormComponent} from "../oper-items-form/oper-items-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-items-create',
    templateUrl: './oper-items-create.component.html',
    styleUrls: ['./oper-items-create.component.scss']
})
export class OperItemsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operItemForm') operItemForm: OperItemsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operItemsService: OperItemsService,
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
        this.operItemForm.operItemsForm.valueChanges.subscribe((data) => {
            this.operItemsService.operItemsFormValid.next(this.operItemForm.operItemsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operItemsService.createOperItem();
        this.operItemsService.operItem = <OperItem>{};
    }

}
