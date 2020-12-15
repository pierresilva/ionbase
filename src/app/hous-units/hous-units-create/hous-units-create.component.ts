import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HousUnitsService} from "../hous-units.service";
import {ActivatedRoute} from "@angular/router";
import {HousUnit} from "../hous-unit";
import {HousUnitsFormComponent} from "../hous-units-form/hous-units-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-hous-units-create',
    templateUrl: './hous-units-create.component.html',
    styleUrls: ['./hous-units-create.component.scss']
})
export class HousUnitsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('housUnitForm') housUnitForm: HousUnitsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public housUnitsService: HousUnitsService,
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
        this.housUnitForm.housUnitsForm.valueChanges.subscribe((data) => {
            this.housUnitsService.housUnitsFormValid.next(this.housUnitForm.housUnitsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.housUnitsService.createHousUnit();
        this.housUnitsService.housUnit = <HousUnit>{};
    }

}
