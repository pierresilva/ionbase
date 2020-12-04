import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {OperMovementsService} from "../oper-movements.service";
import {ActivatedRoute} from "@angular/router";
import {OperMovement} from "../oper-movement";
import {OperMovementsFormComponent} from "../oper-movements-form/oper-movements-form.component";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-oper-movements-edit',
  templateUrl: './oper-movements-edit.component.html',
  styleUrls: ['./oper-movements-edit.component.scss']
})
export class OperMovementsEditComponent implements OnInit, AfterViewInit {

    @ViewChild('operMovementForm') operMovementForm: OperMovementsFormComponent;

    public id: any = null;
    public model: OperMovement = null;

  constructor(
      public operMovementsService: OperMovementsService,
      public route: ActivatedRoute,
      public platform: Platform
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.operMovementsService.editOperMovement(this.id);
  }

  ngAfterViewInit() {
      this.operMovementForm.operMovementsForm.valueChanges.subscribe((data) => {
          this.operMovementsService.operMovementsFormValid.next(this.operMovementForm.operMovementsForm.valid);
      });
  }

}
