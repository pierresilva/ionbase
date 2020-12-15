import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {UserRolesService} from "../user-roles.service";
import {ActivatedRoute} from "@angular/router";
import {UserRole} from "../user-role";
import {UserRolesFormComponent} from "../user-roles-form/user-roles-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-user-roles-edit',
  templateUrl: './user-roles-edit.component.html',
  styleUrls: ['./user-roles-edit.component.scss']
})
export class UserRolesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('userRoleForm') userRoleForm: UserRolesFormComponent;

    public id: any = null;
    public model: UserRole = null;

  constructor(
      public userRolesService: UserRolesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.userRolesService.editUserRole(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.userRoleForm.userRolesForm.valueChanges.subscribe((data) => {
          this.userRolesService.userRolesFormValid.next(this.userRoleForm.userRolesForm.valid);
      });
  }

}
