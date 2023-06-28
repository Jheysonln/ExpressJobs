import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './Modelo/Persona';
import { ServiceService } from './Service/service.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-maintenance-users',
  templateUrl: './maintenance-users.component.html',
  styleUrls: ['./maintenance-users.component.css']
})
export class MaintenanceUsersComponent implements OnInit{
  personas: Persona[];
  persona: Persona = new Persona();
  listaDepartamentos: any[] = [];
  listaProvincias: any[] = [];
  listaDistritos: any[] = [];
  imageUrl: string = '../../../../../assets/aizen.jpg';
  subscription: Subscription = new Subscription;
  file: File | null = null;

  constructor(private http:HttpClient,  private service:ServiceService, private router:Router){
    this.personas = [];
    this.persona = new Persona();
  }

  Confirmar(){
    this.service.createPersona(this.persona)
    .subscribe(data => {
      this.obtenerPersonas();
      this.upload();
    })
  }

  Eliminar(idUsuario: Number){
    this.service.deletePersona(idUsuario)
    .subscribe(data => {
      this.obtenerPersonas();
    })
  }

  ngOnInit() {
    this.obtenerDepartamentos();
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      })
  }

  obtenerDepartamentos(){
    this.http
    .get<any>(`http://localhost:8080/api/generic/obtenerDepartamentos`)
    .subscribe((res) => {
      this.listaDepartamentos = res;
    })
  }

  obtenerProvincias(idDepartamento:any){

    this.http
    .get<any>(`http://localhost:8080/api/generic/obtenerProvincia/${idDepartamento}`)
    .subscribe((res) => {
      this.listaProvincias = res;
    })

    //this.listaProvincias = this.provincias[idDepartamento];
    //reseteando distritos
    this.listaDistritos = [];
  }

  obtenerDistritos(idProvincia:any){

    this.http
    .get<any>(`http://localhost:8080/api/generic/obtenerDistrito/${idProvincia}`)
    .subscribe((res) => {
      console.log('res', res);
      this.listaDistritos = res;
    })
  }

  uploadFile(event: any) {
    this.file = event.target.files[0]
  }

  upload() {
    if (this.file) {
      var formData = new FormData();
      formData.append('file', this.file )
      const params = new HttpParams()
      .append('fullName', "")
      .append('dateOfBirth', "")
      this.http
      .post<any>(`http://localhost:8080/api/image/upload`, formData, {

          params: params,
      })
      .subscribe((res) => {
        alert('Actualizado');
      })
    } else {
      alert("Please select a file first")
    }
  }

  changeImg$(event: any): Observable<string> {
    const img$ = new Observable<string>(observer => {
      let file = event.target.files[0];
      let reader = new FileReader();
      let img: string;
      if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          // img = reader.result as string;
          img = file;
          observer.next(img);
          observer.complete();
        },
          reader.onerror = err => {
            observer.error(err);
          };
      }
    })
    return img$
  }
}
