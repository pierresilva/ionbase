import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserRolesService} from "../user-roles.service";
import {ActivatedRoute} from "@angular/router";
import {UserRole} from "../user-role";
import {UserRolesFormComponent} from "../user-roles-form/user-roles-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
    selector: 'app-user-roles-create',
    templateUrl: './user-roles-create.component.html',
    styleUrls: ['./user-roles-create.component.scss']
})
export class UserRolesCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('userRoleForm') userRoleForm: UserRolesFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public userRolesService: UserRolesService,
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
        this.userRoleForm.userRolesForm.valueChanges.subscribe((data) => {
            this.userRolesService.userRolesFormValid.next(this.userRoleForm.userRolesForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.userRolesService.createUserRole();
        this.userRolesService.userRole = <UserRole>{};
    }

}
