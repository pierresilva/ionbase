import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UsersFormComponent} from "../users-form/users-form.component";

@Component({
    selector: 'app-users-create',
    templateUrl: './users-create.component.html',
    styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit, AfterViewInit {

    @ViewChild('userForm') userForm: UsersFormComponent;

    id: any = null;
    public formValid = false;

    constructor(
        public usersService: UsersService,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.clearPosts();
    }

    ngAfterViewInit() {
        this.userForm.usersForm.valueChanges.subscribe((data) => {
            this.usersService.usersFormValid.next(this.userForm.usersForm.valid);
        });
    }

    clearPosts() {
        console.log('clear');
        this.usersService.createUser();
        this.usersService.user = <User>{};
    }

}
