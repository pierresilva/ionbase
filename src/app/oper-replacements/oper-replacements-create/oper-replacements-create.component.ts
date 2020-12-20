import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OperReplacementsService} from "../oper-replacements.service";
import {ActivatedRoute} from "@angular/router";
import {OperReplacement} from "../oper-replacement";
import {OperReplacementsFormComponent} from "../oper-replacements-form/oper-replacements-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-oper-replacements-create',
    templateUrl: './oper-replacements-create.component.html',
    styleUrls: ['./oper-replacements-create.component.scss']
})
export class OperReplacementsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('operReplacementForm') operReplacementForm: OperReplacementsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public operReplacementsService: OperReplacementsService,
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
        this.operReplacementForm.operReplacementsForm.valueChanges.subscribe((data) => {
            this.operReplacementsService.operReplacementsFormValid.next(this.operReplacementForm.operReplacementsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.operReplacementsService.createOperReplacement();
        this.operReplacementsService.operReplacement = <OperReplacement>{};
    }

}
