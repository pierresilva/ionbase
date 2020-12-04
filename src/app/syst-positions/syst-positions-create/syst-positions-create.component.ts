import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SystPositionsService} from "../syst-positions.service";
import {ActivatedRoute} from "@angular/router";
import {SystPosition} from "../syst-position";
import {SystPositionsFormComponent} from "../syst-positions-form/syst-positions-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-syst-positions-create',
    templateUrl: './syst-positions-create.component.html',
    styleUrls: ['./syst-positions-create.component.scss']
})
export class SystPositionsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('systPositionForm') systPositionForm: SystPositionsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public systPositionsService: SystPositionsService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.systPositionForm.systPositionsForm.valueChanges.subscribe((data) => {
            this.systPositionsService.systPositionsFormValid.next(this.systPositionForm.systPositionsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.systPositionsService.createSystPosition();
        this.systPositionsService.systPosition = <SystPosition>{};
    }

}
