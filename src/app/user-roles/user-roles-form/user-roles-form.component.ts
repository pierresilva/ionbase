import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserRole} from "../user-role";
import {FormGroup} from "@angular/forms";
import {UserRolesService} from "../user-roles.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-user-roles-form',
    templateUrl: './user-roles-form.component.html',
    styleUrls: ['./user-roles-form.component.scss']
})
export class UserRolesFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: UserRole = <UserRole>{};

    @ViewChild('userRolesForm') userRolesForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'code': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('CÓDIGO') + ' es obligatorio.'},
        ],
        'user_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIOS') + ' es obligatorio.'},
        ],
        'user_permission_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('USUARIOS PERMISOS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public userRolesService: UserRolesService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setUserIds
    setUserIds(event: any) {
        let userIds = null;
        if (event.value.length) {
            userIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userIds.push(event.value[i].id);
            }
        }
        this.userRolesService.userRole.user_ids = userIds;
    }
    // end setUserIds


    // set setUserPermissionIds
    setUserPermissionIds(event: any) {
        let userPermissionIds = null;
        if (event.value.length) {
            userPermissionIds = [];
            for (let i = 0; i < event.value.length; i++) {
                userPermissionIds.push(event.value[i].id);
            }
        }
        this.userRolesService.userRole.user_permission_ids = userPermissionIds;
    }
    // end setUserPermissionIds


}
