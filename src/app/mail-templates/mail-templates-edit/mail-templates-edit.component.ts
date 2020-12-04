import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MailTemplatesService} from "../mail-templates.service";
import {ActivatedRoute} from "@angular/router";
import {MailTemplate} from "../mail-template";
import {MailTemplatesFormComponent} from "../mail-templates-form/mail-templates-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mail-templates-edit',
  templateUrl: './mail-templates-edit.component.html',
  styleUrls: ['./mail-templates-edit.component.scss']
})
export class MailTemplatesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('mailTemplateForm') mailTemplateForm: MailTemplatesFormComponent;

    public id: any = null;
    public model: MailTemplate = null;

  constructor(
      public mailTemplatesService: MailTemplatesService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.mailTemplatesService.editMailTemplate(this.id);
  }

  ngAfterViewInit() {
      this.mailTemplateForm.mailTemplatesForm.valueChanges.subscribe((data) => {
          this.mailTemplatesService.mailTemplatesFormValid.next(this.mailTemplateForm.mailTemplatesForm.valid);
      });
  }

}
