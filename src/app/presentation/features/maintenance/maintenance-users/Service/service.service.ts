import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/api/usuarios/obtenerUsuarios';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona: Persona){
    console.log('nomusuario', persona);
    const body = {
      UsuarioRequest: persona
    };

    return this.http
    .post<Persona>('http://localhost:8080/api/usuarios/crearUsuario', persona,)
    
  }

  deletePersona(userId: Number){
    console.log('nomusuarioDelete', userId);

    return this.http
    .delete<Persona>(`http://localhost:8080/api/usuarios/eliminarUsuario/${userId}`)
    
  }
}
