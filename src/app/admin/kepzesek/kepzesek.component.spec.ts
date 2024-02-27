import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KepzesekComponent } from './kepzesek.component';

describe('KepzesekComponent', () => {
  let component: KepzesekComponent;
  let fixture: ComponentFixture<KepzesekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KepzesekComponent]
    });
    fixture = TestBed.createComponent(KepzesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
