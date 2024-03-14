import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const isAdmin = localStorage.getItem('admin');
  const session = isAdmin === '1';

  const protectedRoutes: string[] = ['/admin', '/adminfelh', '/adminrep', '/adminkepzsk'];

  if (protectedRoutes.includes(state.url) && !session) {
      router.navigate(['']);
      return false;
  }

  return true;
};
