import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompAddressesService} from "../comp-addresses.service";
import {ActivatedRoute} from "@angular/router";
import {CompAddress} from "../comp-address";
import {CompAddressesFormComponent} from "../comp-addresses-form/comp-addresses-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-comp-addresses-create',
    templateUrl: './comp-addresses-create.component.html',
    styleUrls: ['./comp-addresses-create.component.scss']
})
export class CompAddressesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('compAddressForm') compAddressForm: CompAddressesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public compAddressesService: CompAddressesService,
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
        this.compAddressForm.compAddressesForm.valueChanges.subscribe((data) => {
            this.compAddressesService.compAddressesFormValid.next(this.compAddressForm.compAddressesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.compAddressesService.createCompAddress();
        this.compAddressesService.compAddress = <CompAddress>{};
    }

}
