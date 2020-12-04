import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperSectorsService} from "../oper-sectors.service";
import {ActivatedRoute} from "@angular/router";
import {OperSector} from "../oper-sector";
import {OperSectorsFormComponent} from "../oper-sectors-form/oper-sectors-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-oper-sectors-create',
    templateUrl: './oper-sectors-create.component.html',
    styleUrls: ['./oper-sectors-create.component.scss']
})
export class OperSectorsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operSectorForm') operSectorForm: OperSectorsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operSectorsService: OperSectorsService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.operSectorForm.operSectorsForm.valueChanges.subscribe((data) => {
            this.operSectorsService.operSectorsFormValid.next(this.operSectorForm.operSectorsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operSectorsService.createOperSector();
        this.operSectorsService.operSector = <OperSector>{};
    }

}
