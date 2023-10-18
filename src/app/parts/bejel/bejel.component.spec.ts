import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BejelComponent } from './bejel.component';

describe('BejelComponent', () => {
  let component: BejelComponent;
  let fixture: ComponentFixture<BejelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BejelComponent]
    });
    fixture = TestBed.createComponent(BejelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
