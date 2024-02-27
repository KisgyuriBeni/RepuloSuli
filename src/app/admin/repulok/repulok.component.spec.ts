import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepulokComponent } from './repulok.component';

describe('RepulokComponent', () => {
  let component: RepulokComponent;
  let fixture: ComponentFixture<RepulokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepulokComponent]
    });
    fixture = TestBed.createComponent(RepulokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
