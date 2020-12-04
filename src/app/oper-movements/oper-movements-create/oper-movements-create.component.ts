import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperMovementsService} from "../oper-movements.service";
import {ActivatedRoute} from "@angular/router";
import {OperMovement} from "../oper-movement";
import {OperMovementsFormComponent} from "../oper-movements-form/oper-movements-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-oper-movements-create',
    templateUrl: './oper-movements-create.component.html',
    styleUrls: ['./oper-movements-create.component.scss']
})
export class OperMovementsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operMovementForm') operMovementForm: OperMovementsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operMovementsService: OperMovementsService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.operMovementForm.operMovementsForm.valueChanges.subscribe((data) => {
            this.operMovementsService.operMovementsFormValid.next(this.operMovementForm.operMovementsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operMovementsService.createOperMovement();
        this.operMovementsService.operMovement = <OperMovement>{};
    }

}
