import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserPermission} from "../user-permission";
import {FormGroup} from "@angular/forms";
import {UserPermissionsService} from "../user-permissions.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-user-permissions-form',
    templateUrl: './user-permissions-form.component.html',
    styleUrls: ['./user-permissions-form.component.scss']
})
export class UserPermissionsFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: UserPermission = <UserPermission>{};

    @ViewChild('userPermissionsForm') userPermissionsForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'user_role_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIOS ROLES') + ' es obligatorio.'},
        ],
    };

    constructor(
        public userPermissionsService: UserPermissionsService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setUserRoleIds
    setUserRoleIds(event: any) {
        let userRoleIds = null;
        if (event.value.length) {
            userRoleIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userRoleIds.push(event.value[i].id);
            }
        }
        this.userPermissionsService.userPermission.user_role_ids = userRoleIds;
    }
    // end setUserRoleIds


}
