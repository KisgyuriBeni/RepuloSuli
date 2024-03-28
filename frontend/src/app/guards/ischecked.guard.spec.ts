import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ischeckedGuard } from './ischecked.guard';

describe('ischeckedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ischeckedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
