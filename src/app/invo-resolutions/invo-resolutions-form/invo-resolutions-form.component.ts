import {Component, OnInit, ViewChild} from '@angular/core';
import {InvoResolutionsService} from "../invo-resolutions.service";
import {ActivatedRoute} from "@angular/router";
import {Platform} from "@ionic/angular";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {FormGroup} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";
import * as moment from 'moment';

@Component({
    selector: 'app-invo-resolutions-form',
    templateUrl: './invo-resolutions-form.component.html',
    styleUrls: ['./invo-resolutions-form.component.scss'],
})
export class InvoResolutionsFormComponent implements OnInit {

    @ViewChild('invoResolutionsForm') invoResolutionsForm: FormGroup;

    public id: any = 0;

    public now = moment();

    constructor(
        public invoResolutionsService: InvoResolutionsService,
        public platform: Platform,
        public splitPanel: SplitPanelService,
        public route: ActivatedRoute,
        private toTitleCase: TitleCasePipe
    ) {
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.id = this.route.snapshot.paramMap.get('id');
        this.invoResolutionsService.getItem(this.id);
        this.invoResolutionsService.form = this.invoResolutionsForm;
    }

    setMonths() {
        if (this.invoResolutionsService.item.date_from && this.invoResolutionsService.item.date_to) {
            this.invoResolutionsService.item.months = moment(this.invoResolutionsService.item.date_to).diff(this.invoResolutionsService.item.date_from, 'months');
        }
    }

}
