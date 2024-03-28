import { CanActivateFn } from '@angular/router';

export const ischeckedGuard: CanActivateFn = (route, state) => {
  return true;
};
