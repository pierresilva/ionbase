import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CorrPacketsService} from "../corr-packets.service";
import {ActivatedRoute} from "@angular/router";
import {CorrPacket} from "../corr-packet";
import {CorrPacketsFormComponent} from "../corr-packets-form/corr-packets-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-corr-packets-create',
    templateUrl: './corr-packets-create.component.html',
    styleUrls: ['./corr-packets-create.component.scss']
})
export class CorrPacketsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('corrPacketForm') corrPacketForm: CorrPacketsFormComponent;

    id: any = null;
    public formValid = false;
    private formSubscription: Subscription;

    constructor(
        public corrPacketsService: CorrPacketsService,
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
       this.formSubscription = this.corrPacketForm.corrPacketsForm.valueChanges.subscribe((data) => {
           this.corrPacketsService.corrPacketsFormValid.next(this.corrPacketForm.corrPacketsForm.valid);
       });

    }

    ionViewWillLeave() {
        this.formSubscription.unsubscribe();
    }

    ngAfterViewInit() {

    }

    clearPosts() {
        console.log('clear');
        this.corrPacketsService.createCorrPacket();
        this.corrPacketsService.corrPacket = <CorrPacket>{};
    }

}
