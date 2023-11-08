import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfjelComponent } from './elfjel.component';

describe('ElfjelComponent', () => {
  let component: ElfjelComponent;
  let fixture: ComponentFixture<ElfjelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElfjelComponent]
    });
    fixture = TestBed.createComponent(ElfjelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
