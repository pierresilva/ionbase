import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperScheduleContractorFormComponent } from './oper-schedule-contractor-form.component';

describe('OperScheduleContractorFormComponent', () => {
  let component: OperScheduleContractorFormComponent;
  let fixture: ComponentFixture<OperScheduleContractorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperScheduleContractorFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperScheduleContractorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
