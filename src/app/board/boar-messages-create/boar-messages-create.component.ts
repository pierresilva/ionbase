import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Platform} from "@ionic/angular";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {BoarMessagesService} from "../boar-messages.service";
import {BoarMessagesFormComponent} from "../boar-messages-form/boar-messages-form.component";
import {CompAddress} from "../../comp-addresses/comp-address";
import {BoarMessage} from "../boar-message";

@Component({
    selector: 'app-boar-messages-create',
    templateUrl: './boar-messages-create.component.html',
    styleUrls: ['./boar-messages-create.component.scss'],
})
export class BoarMessagesCreateComponent implements OnInit {

    @ViewChild('boarMessagesForm') boarMessagesForm: BoarMessagesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public boarMessagesService: BoarMessagesService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService
    ) {
    }

    ngOnInit() {
        this.clearBoarMessage();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }

    ngAfterViewInit() {
        this.boarMessagesForm.boarMessagesForm.valueChanges.subscribe((data) => {
            this.boarMessagesService.boarMessagesFormValid.next(this.boarMessagesForm.boarMessagesForm.valid);
        });
    }

    clearBoarMessage() {
        console.log('clear');
        this.boarMessagesService.createBoarMessage();
        this.boarMessagesService.boarMessage = <BoarMessage>{};
    }

}
