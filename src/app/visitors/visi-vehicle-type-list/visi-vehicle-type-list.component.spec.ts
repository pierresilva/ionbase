import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisiVehicleTypeListComponent } from './visi-vehicle-type-list.component';

describe('VisiVehicleTypeListComponent', () => {
  let component: VisiVehicleTypeListComponent;
  let fixture: ComponentFixture<VisiVehicleTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiVehicleTypeListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisiVehicleTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
