import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UsersFormComponent} from "../users-form/users-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit, AfterViewInit {

    @ViewChild('userForm') userForm: UsersFormComponent;

    public id: any = null;
    public model: User = null;

  constructor(
      public usersService: UsersService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.usersService.editUser(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.userForm.usersForm.valueChanges.subscribe((data) => {
          this.usersService.usersFormValid.next(this.userForm.usersForm.valid);
      });
  }

}
