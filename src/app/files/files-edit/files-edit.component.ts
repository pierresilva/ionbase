import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FilesService} from "../files.service";
import {ActivatedRoute} from "@angular/router";
import {File} from "../file";
import {FilesFormComponent} from "../files-form/files-form.component";
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-files-edit',
  templateUrl: './files-edit.component.html',
  styleUrls: ['./files-edit.component.scss']
})
export class FilesEditComponent implements OnInit, AfterViewInit {

    @ViewChild('fileForm') fileForm: FilesFormComponent;

    public id: any = null;
    public model: File = null;

  constructor(
      public filesService: FilesService,
      public route: ActivatedRoute,
      public platform: Platform,
      public splitPanel: SplitPanelService,
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.filesService.editFile(this.id);
  }

  ionViewWillEnter() {
    this.splitPanel.show.next(true);
  }

  ngAfterViewInit() {
      this.fileForm.filesForm.valueChanges.subscribe((data) => {
          this.filesService.filesFormValid.next(this.fileForm.filesForm.valid);
      });
  }

}
