import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/data/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuardGuard implements CanActivate {

  subscription: Subscription = new Subscription;
  isLogued: boolean = false;
  rol: string = "";

  constructor(private _authService: AuthService, private router: Router) {
    this.subscription.add(this._authService.isLogged$.subscribe((res: boolean) => this.isLogued = res));
    this.subscription.add(this._authService.userProfile$.subscribe((res: string) => this.rol = res));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.isLogued;
    const roles = this.rol;

    if (token && roles) {
      // Aquí puedes implementar la lógica para verificar los roles permitidos
      const allowedRoles = next.data['allowedRoles'];
      if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.some((role:any) => roles.includes(role))) {
        // Redireccionar a una página de acceso no autorizado
        // return this.router.parseUrl('/unauthorized');
        // alert('unauthorized');
        return false;
      }
      // console.log('paso');
      return true;
    } else {
      // Redireccionar a la página de inicio de sesión
      // return this.router.parseUrl('/login');
      // alert('login');
      return false;
    }
  }
}
