import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelentkComponent } from './jelentk.component';

describe('JelentkComponent', () => {
  let component: JelentkComponent;
  let fixture: ComponentFixture<JelentkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JelentkComponent]
    });
    fixture = TestBed.createComponent(JelentkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
