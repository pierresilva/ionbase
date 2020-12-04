import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SystParametersService} from "../syst-parameters.service";
import {ActivatedRoute} from "@angular/router";
import {SystParameter} from "../syst-parameter";
import {SystParametersFormComponent} from "../syst-parameters-form/syst-parameters-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-syst-parameters-create',
    templateUrl: './syst-parameters-create.component.html',
    styleUrls: ['./syst-parameters-create.component.scss']
})
export class SystParametersCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('systParameterForm') systParameterForm: SystParametersFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public systParametersService: SystParametersService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.systParameterForm.systParametersForm.valueChanges.subscribe((data) => {
            this.systParametersService.systParametersFormValid.next(this.systParameterForm.systParametersForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.systParametersService.createSystParameter();
        this.systParametersService.systParameter = <SystParameter>{};
    }

}
