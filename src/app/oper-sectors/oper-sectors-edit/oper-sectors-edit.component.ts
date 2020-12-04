import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperSectorsService} from "../oper-sectors.service";
import {ActivatedRoute} from "@angular/router";
import {OperSector} from "../oper-sector";
import {OperSectorsFormComponent} from "../oper-sectors-form/oper-sectors-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-oper-sectors-edit',
  templateUrl: './oper-sectors-edit.component.html',
  styleUrls: ['./oper-sectors-edit.component.scss']
})
export class OperSectorsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operSectorForm') operSectorForm: OperSectorsFormComponent;

    public id: any = null;
    public model: OperSector = null;

  constructor(
      public operSectorsService: OperSectorsService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operSectorsService.editOperSector(this.id);
  }

  ngAfterViewInit() {
      this.operSectorForm.operSectorsForm.valueChanges.subscribe((data) => {
          this.operSectorsService.operSectorsFormValid.next(this.operSectorForm.operSectorsForm.valid);
      });
  }

}
