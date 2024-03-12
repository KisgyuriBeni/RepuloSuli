import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TajekoztatoComponent } from './tajekoztato.component';

describe('TajekoztatoComponent', () => {
  let component: TajekoztatoComponent;
  let fixture: ComponentFixture<TajekoztatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TajekoztatoComponent]
    });
    fixture = TestBed.createComponent(TajekoztatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
