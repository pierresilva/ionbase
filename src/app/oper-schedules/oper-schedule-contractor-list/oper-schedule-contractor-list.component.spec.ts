import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperScheduleContractorListComponent } from './oper-schedule-contractor-list.component';

describe('OperScheduleContractorListComponent', () => {
  let component: OperScheduleContractorListComponent;
  let fixture: ComponentFixture<OperScheduleContractorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperScheduleContractorListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperScheduleContractorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
