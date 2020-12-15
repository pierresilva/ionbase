import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {UserPermissionsService} from "../user-permissions.service";
import {ActivatedRoute} from "@angular/router";
import {UserPermission} from "../user-permission";
import {UserPermissionsFormComponent} from "../user-permissions-form/user-permissions-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-user-permissions-edit',
  templateUrl: './user-permissions-edit.component.html',
  styleUrls: ['./user-permissions-edit.component.scss']
})
export class UserPermissionsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('userPermissionForm') userPermissionForm: UserPermissionsFormComponent;

    public id: any = null;
    public model: UserPermission = null;

  constructor(
      public userPermissionsService: UserPermissionsService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.userPermissionsService.editUserPermission(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.userPermissionForm.userPermissionsForm.valueChanges.subscribe((data) => {
          this.userPermissionsService.userPermissionsFormValid.next(this.userPermissionForm.userPermissionsForm.valid);
      });
  }

}
