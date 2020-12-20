import {Component, OnInit, ViewChild} from '@angular/core';
import { OperReplacementsService} from "../oper-replacements.service";
import {ApiService} from "../../@shared/services/api.service";
import {LoadingService} from "../../@shared/services/loading.service";
import {IonContent} from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-replacements-list',
    templateUrl: './oper-replacements-list.component.html',
    styleUrls: ['./oper-replacements-list.component.scss'],
})
export class OperReplacementsListComponent implements OnInit {

    @ViewChild(IonContent, {static: false}) content: IonContent;

    popover: any;

    constructor(
        public operReplacementsService: OperReplacementsService,
        public api: ApiService,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.operReplacementsService.getOperReplacements();
    }

    ionViewWillEnter() {
     this.splitPanel.show.next(true);
    }

    public scrollToTop() {
        this.content.scrollToTop(300);
    }

}
