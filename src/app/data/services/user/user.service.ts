import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IUsuario } from 'src/app/core/interfaces/UserInterface';
import { errors_msg } from 'src/app/core/utilities/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private MyAppUrl = environment.apiUrl;
  private MyApiUrl = '/api/usuarios/';
  
  constructor(private http: HttpClient, private orRouter: Router) {
  }

  obtenerUsuarioEmail$(email: string){
    let name = "obtenerUsuarioEmail/";
    return this.http.get<IUsuario>(this.MyAppUrl + this.MyApiUrl + name + email)
  }


  createUsuario$(user: IUsuario) : Observable<number>  {
    let name = "crearUsuario";
    const usuario = JSON.stringify(user);
    return this.http.post<number>(this.MyAppUrl + this.MyApiUrl + name, usuario).pipe(
      map((response: number) => {
        return response;
      }),
      catchError((err) => this.handleError$(err))
    );
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
