import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/core/interfaces/UserInterface';
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


  createUsuario$(user: IUsuario) {
    let name = "crearUsuario";
    const usuario = JSON.stringify(user);
    return this.http.post<number>(this.MyAppUrl + this.MyApiUrl + name, usuario);
  }


}
