import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const session = !!token;

    const protectedRoutes: string[] = ['/profil', '/adatlap', '/jelentkezes', '/tajekoztato'];

    if (protectedRoutes.includes(state.url) && !session) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
