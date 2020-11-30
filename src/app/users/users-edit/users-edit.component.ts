import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UsersFormComponent} from "../users-form/users-form.component";

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
      public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.usersService.editUser(this.id);
  }

  ngAfterViewInit() {
      this.userForm.usersForm.valueChanges.subscribe((data) => {
          this.usersService.usersFormValid.next(this.userForm.usersForm.valid);
      });
  }

}
