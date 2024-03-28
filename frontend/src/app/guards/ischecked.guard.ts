import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { inject } from '@angular/core';

export const ischeckedGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot ) => {
  const router: Router = inject(Router)
  const isCheckedString = sessionStorage.getItem('isChecked')
  const session = isCheckedString === 'true'

  const protectedRoutes: string[] = ['/jelentkezes']
  if (protectedRoutes.includes(state.url) && !session) {
    router.navigate([''])
    return false
  }

  return true
}
