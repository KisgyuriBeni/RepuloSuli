import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatlapComponent } from './adatlap.component';

describe('AdatlapComponent', () => {
  let component: AdatlapComponent;
  let fixture: ComponentFixture<AdatlapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdatlapComponent]
    });
    fixture = TestBed.createComponent(AdatlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
