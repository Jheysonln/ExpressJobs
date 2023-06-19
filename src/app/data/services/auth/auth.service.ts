import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { IAuth, IAuthResponseToken } from 'src/app/core/interfaces/AuthInterface';
import { errors_msg, swallLoader, toast_msg } from 'src/app/core/utilities/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private MyAppUrl = environment.apiUrl;
  private MyApiUrl = '/api/auth/';

  public logeedIn = new BehaviorSubject<boolean>(false);
  public user = new BehaviorSubject<string>("");
  public profile = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private orRouter: Router) {
    this.checkToken();
  }

  get isLogged$(): Observable<boolean> {
    return this.logeedIn.asObservable();
  }

  get userProfile$(): Observable<string> {
    return this.profile.asObservable();
  }

  get userEmail$(): Observable<string> {
    return this.user.asObservable();
  }

  login$(auth: IAuth): Observable<IAuthResponseToken> {
    const name = "login";
    const credentials = JSON.stringify(auth);
    return this.http.post<IAuthResponseToken>(this.MyAppUrl + this.MyApiUrl + name, credentials)
      .pipe(
        map((response: IAuthResponseToken) => {
          this.saveLocalStorage(response);
          return response;
        }),
        catchError((err) => this.handleError$(err))
      );
  }

  saveLocalStorage(responseToken: IAuthResponseToken): void {
    if (responseToken) {
      this.logeedIn.next(true);
      localStorage.setItem('jwt', JSON.stringify(responseToken));
      this.setDataLocalStorage();
    }
  }

  setDataLocalStorage() {
    const token = localStorage.getItem('jwt');
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      this.profile.next(decodedToken['roles'][0]);
      this.user.next(decodedToken['user']);
    }
  }

  checkToken() {
    //instalar paquete npm i @auth0/angular-jwt
    const token = localStorage.getItem('jwt');
    if (token) {
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(token);
      if (isExpired) {
        this.logout();
      } else {
        this.logeedIn.next(true);
        this.setDataLocalStorage();
      }
    } else {
      this.logout();
    }
  }

  logout() {
    localStorage.removeItem('jwt');
    this.logeedIn.next(false);
    this.profile.next("");
    this.user.next("");
    this.orRouter.navigate(['/']);
  }

  handleError$(err: any): Observable<any> {
    let error = "Ocurrió un error en los datos";
    if (err) {
      error = err.message;
      errors_msg(err);
    }
    return throwError(() => new Error(error));
  }
}
