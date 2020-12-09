import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CorrPacketsService} from "../corr-packets.service";
import {ActivatedRoute} from "@angular/router";
import {CorrPacket} from "../corr-packet";
import {CorrPacketsFormComponent} from "../corr-packets-form/corr-packets-form.component";
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-corr-packets-create',
    templateUrl: './corr-packets-create.component.html',
    styleUrls: ['./corr-packets-create.component.scss']
})
export class CorrPacketsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('corrPacketForm') corrPacketForm: CorrPacketsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public corrPacketsService: CorrPacketsService,
        public route: ActivatedRoute,
        public platform: Platform
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.corrPacketForm.corrPacketsForm.valueChanges.subscribe((data) => {
            this.corrPacketsService.corrPacketsFormValid.next(this.corrPacketForm.corrPacketsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.corrPacketsService.createCorrPacket();
        this.corrPacketsService.corrPacket = <CorrPacket>{};
    }

}
