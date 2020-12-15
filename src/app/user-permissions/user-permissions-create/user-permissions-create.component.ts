import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserPermissionsService} from "../user-permissions.service";
import {ActivatedRoute} from "@angular/router";
import {UserPermission} from "../user-permission";
import {UserPermissionsFormComponent} from "../user-permissions-form/user-permissions-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-user-permissions-create',
    templateUrl: './user-permissions-create.component.html',
    styleUrls: ['./user-permissions-create.component.scss']
})
export class UserPermissionsCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('userPermissionForm') userPermissionForm: UserPermissionsFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public userPermissionsService: UserPermissionsService,
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
        this.userPermissionForm.userPermissionsForm.valueChanges.subscribe((data) => {
            this.userPermissionsService.userPermissionsFormValid.next(this.userPermissionForm.userPermissionsForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.userPermissionsService.createUserPermission();
        this.userPermissionsService.userPermission = <UserPermission>{};
    }

}
