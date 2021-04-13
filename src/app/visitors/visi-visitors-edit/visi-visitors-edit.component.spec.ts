import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisiVisitorsEditComponent } from './visi-visitors-edit.component';

describe('VisiVisitorsEditComponent', () => {
  let component: VisiVisitorsEditComponent;
  let fixture: ComponentFixture<VisiVisitorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiVisitorsEditComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisiVisitorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
