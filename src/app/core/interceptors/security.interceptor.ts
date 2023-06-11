import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/data/services/auth/auth.service';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor,OnDestroy {

  subscription: Subscription = new Subscription;
  private logued: boolean = false;
  
  constructor(private _authService: AuthService) {
    this.subscription.add(this._authService.isLogged$.subscribe(res => this.logued = res));
  }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token de usuario de localStorage
    const tokenJson = localStorage.getItem('jwt');   

    // Clonar la solicitud y agregar el encabezado 'Content-Type' si no está presente
    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    // Agregar el token de usuario al encabezado 'Authorization'
    if (tokenJson && this.logued) {
      const tokenObj = JSON.parse(tokenJson);
      request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${tokenObj.token}`) });
    }

    // Pasar la solicitud modificada al siguiente interceptor o al controlador HTTP
    return next.handle(request);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
