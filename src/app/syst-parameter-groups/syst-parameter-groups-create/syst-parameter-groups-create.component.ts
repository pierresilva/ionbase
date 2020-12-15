import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SystParameterGroupsService} from "../syst-parameter-groups.service";
import {ActivatedRoute} from "@angular/router";
import {SystParameterGroup} from "../syst-parameter-group";
import {SystParameterGroupsFormComponent} from "../syst-parameter-groups-form/syst-parameter-groups-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-syst-parameter-groups-create',
    templateUrl: './syst-parameter-groups-create.component.html',
    styleUrls: ['./syst-parameter-groups-create.component.scss']
})
export class SystParameterGroupsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('systParameterGroupForm') systParameterGroupForm: SystParameterGroupsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public systParameterGroupsService: SystParameterGroupsService,
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
        this.systParameterGroupForm.systParameterGroupsForm.valueChanges.subscribe((data) => {
            this.systParameterGroupsService.systParameterGroupsFormValid.next(this.systParameterGroupForm.systParameterGroupsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.systParameterGroupsService.createSystParameterGroup();
        this.systParameterGroupsService.systParameterGroup = <SystParameterGroup>{};
    }

}
