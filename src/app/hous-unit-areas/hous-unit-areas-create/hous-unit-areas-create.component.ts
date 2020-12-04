import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HousUnitAreasService} from "../hous-unit-areas.service";
import {ActivatedRoute} from "@angular/router";
import {HousUnitArea} from "../hous-unit-area";
import {HousUnitAreasFormComponent} from "../hous-unit-areas-form/hous-unit-areas-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-hous-unit-areas-create',
    templateUrl: './hous-unit-areas-create.component.html',
    styleUrls: ['./hous-unit-areas-create.component.scss']
})
export class HousUnitAreasCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('housUnitAreaForm') housUnitAreaForm: HousUnitAreasFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public housUnitAreasService: HousUnitAreasService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.housUnitAreaForm.housUnitAreasForm.valueChanges.subscribe((data) => {
            this.housUnitAreasService.housUnitAreasFormValid.next(this.housUnitAreaForm.housUnitAreasForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.housUnitAreasService.createHousUnitArea();
        this.housUnitAreasService.housUnitArea = <HousUnitArea>{};
    }

}
