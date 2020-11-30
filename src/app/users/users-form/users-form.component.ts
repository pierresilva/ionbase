import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from "../user";
import {FormGroup} from "@angular/forms";
import {UsersService} from "../users.service";
import {TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit, AfterViewInit {

    @Input('model') model: User = <User>{};

    @ViewChild('usersForm') usersForm: FormGroup;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NAME') + ' es obligatorio.'},
        ],
        'email': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('EMAIL') + ' es obligatorio.'},
        ],
        'post_ids': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ENTRADAS') + ' es obligatorio.'},
        ],
    };

    constructor(
        public usersService: UsersService,
        private toTitlecase: TitleCasePipe
    ) {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    // set setPostIds
    setPostIds(event: any) {
        let postIds = null;
        if (event.value.length) {
            postIds = [];
            for (let i = 0; i < event.value.length; i++) {
                postIds.push(event.value[i].id);
            }
        }
        this.usersService.user.post_ids = postIds;
    }
    // end setPostIds


}
