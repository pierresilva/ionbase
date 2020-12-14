import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrDeliveryModalComponent } from './corr-delivery-modal.component';

describe('CorrDeliveryModalComponent', () => {
  let component: CorrDeliveryModalComponent;
  let fixture: ComponentFixture<CorrDeliveryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrDeliveryModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrDeliveryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
