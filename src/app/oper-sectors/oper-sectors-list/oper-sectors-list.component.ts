import {Component, OnInit, ViewChild} from '@angular/core';
import { OperSectorsService} from "../oper-sectors.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-oper-sectors-list',
    templateUrl: './oper-sectors-list.component.html',
    styleUrls: ['./oper-sectors-list.component.scss'],
})
export class OperSectorsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operSectorsService: OperSectorsService,
        public api: ApiService,
        public loading: LoadingService,
    ) {
    }

    ngOnInit() {
        this.operSectorsService.getOperSectors();
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
