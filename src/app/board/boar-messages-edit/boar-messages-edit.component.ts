import {Component, OnInit, ViewChild} from '@angular/core';
import {CompAddress} from "../../comp-addresses/comp-address";
import {BoarMessagesFormComponent} from "../boar-messages-form/boar-messages-form.component";
import {BoarMessage} from "../boar-message";
import {CompAddressesService} from "../../comp-addresses/comp-addresses.service";
import {ActivatedRoute} from "@angular/router";
import {Platform} from "@ionic/angular";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {BoarMessagesService} from "../boar-messages.service";

@Component({
    selector: 'app-boar-messages-edit',
    templateUrl: './boar-messages-edit.component.html',
    styleUrls: ['./boar-messages-edit.component.scss'],
})
export class BoarMessagesEditComponent implements OnInit {

    @ViewChild('boarMessagesForm') boarMessagesForm: BoarMessagesFormComponent;

    public id: any = null;
    public model: BoarMessage = null;

    constructor(
        public boarMessagesService: BoarMessagesService,
        public route: ActivatedRoute,
        public platform: Platform,
        public splitPanel: SplitPanelService,
    ) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.boarMessagesService.editBoarMessage(this.id);
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
    }

    ngAfterViewInit() {
        this.boarMessagesForm.boarMessagesForm.valueChanges.subscribe((data) => {
            this.boarMessagesService.boarMessagesFormValid.next(this.boarMessagesForm.boarMessagesForm.valid);
        });
    }

}
