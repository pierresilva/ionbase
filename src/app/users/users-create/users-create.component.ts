import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UsersFormComponent} from "../users-form/users-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

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
