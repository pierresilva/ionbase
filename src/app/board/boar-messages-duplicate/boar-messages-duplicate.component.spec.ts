import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoarMessagesDuplicateComponent } from './boar-messages-duplicate.component';

describe('BoarMessagesDuplicateComponent', () => {
  let component: BoarMessagesDuplicateComponent;
  let fixture: ComponentFixture<BoarMessagesDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoarMessagesDuplicateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoarMessagesDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
