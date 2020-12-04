import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MailsService} from "../mails.service";
import {ActivatedRoute} from "@angular/router";
import {Mail} from "../mail";
import {MailsFormComponent} from "../mails-form/mails-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mails-edit',
  templateUrl: './mails-edit.component.html',
  styleUrls: ['./mails-edit.component.scss']
})
export class MailsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('mailForm') mailForm: MailsFormComponent;

    public id: any = null;
    public model: Mail = null;

  constructor(
      public mailsService: MailsService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.mailsService.editMail(this.id);
  }

  ngAfterViewInit() {
      this.mailForm.mailsForm.valueChanges.subscribe((data) => {
          this.mailsService.mailsFormValid.next(this.mailForm.mailsForm.valid);
      });
  }

}
