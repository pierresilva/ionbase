import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisiVehicleTypeFormComponent } from './visi-vehicle-type-form.component';

describe('VisiVehicleTypeFormComponent', () => {
  let component: VisiVehicleTypeFormComponent;
  let fixture: ComponentFixture<VisiVehicleTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiVehicleTypeFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisiVehicleTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
