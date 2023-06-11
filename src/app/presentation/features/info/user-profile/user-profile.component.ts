import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import{ GlobalConstants } from '../../../../common/global-constants';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';

interface IconOption {
  value: string;
  icon: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  idDepartamento!: string;
  idProvincia!: string;
  listaDepartamentos: any[] = [];
  listaProvincias: any[] = [];
  listaDistritos: any[] = [];

  nom_usuario = '';
  ape_usuario = '';
  correo_usuario = '';
  password_usuario = '';
  telefono_usuario = '';
  num_documento = '';
  direc_usuario = '';
  id_Depa = '';
  id_dist = '';
  id_provincia = '';

  ngOnInit(): void {
    this.obtenerUsuario();
    this.obtenerDepartamentos();
  }
  constructor(
    private http: HttpClient,
    )
    {
  }

  obtenerDepartamentos(){
    this.http
    .get<any>(`http://localhost:8080/api/generic/obtenerDepartamentos`)
    .subscribe((res) => {
      this.listaDepartamentos = res;
    })
  }

  actualizar(){

    const headers = new HttpHeaders()
    console.log('nomusuario', this.nom_usuario);
    const body = {
      
      nom_usuario: this.nom_usuario,
      ape_usuario: this.ape_usuario,
      correo_usuario: this.correo_usuario,
      password_usuario: this.password_usuario,
      telefono_usuario: this.telefono_usuario,
      num_documento: this.num_documento,
      direc_usuario: this.direc_usuario,
      id_Depa: this.id_Depa,
      id_dist: this.id_dist,
      id_provincia: this.id_provincia,
      id_prefijo_telefono: 1,
      id_tipodocumento: 1,
      id_rol: 1,
      id_especialidad: 1,
    };

    this.http
    .put<any>(`http://localhost:8080/api/usuarios/actualizarUsuario/${GlobalConstants.appIdUsername}`, body, {
        headers: headers,
    })
    .subscribe((res) => {
      alert('Actualizado');
    })

    //this.listaProvincias = this.provincias[idDepartamento];
    //reseteando distritos
    this.listaDistritos = [];
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

  obtenerUsuario() {
    //this.router.navigate(['/home']);

    this.http
    .get<any>(`http://localhost:8080/api/usuarios/obtenerUsuarioId/${GlobalConstants.appIdUsername}`)
    .subscribe((res) => {
      if(res.nom_usuario!=''){
        console.log(res);
        this.nom_usuario = res.nom_usuario;
        this.ape_usuario = res.ape_usuario;
        this.correo_usuario = res.correo_usuario;
        this.password_usuario = res.password_usuario;
        this.telefono_usuario = res.telefono_usuario;
        this.num_documento = res.num_documento;
        this.direc_usuario = res.direc_usuario;
        this.id_Depa = res.id_Depa;
        this.id_dist = res.id_dist;
        this.id_provincia = res.id_provincia;

        if(res.id_Depa != null){
          this.obtenerProvincias(res.id_Depa);
        }
        if(res.id_dist != null){
          this.obtenerDistritos(res.id_provincia);
        }

      }else{
        console.log('error al obtener usuario');
      }
    }
     
    );
  }
  prefixOptions: string[] = ['+51', '+52', '+53'];
  selectedPrefix: string = '+51';
  selectedOption: string = '';

  foods: any[] = [
    { value: 1, viewValue: 'Delantero' },
    { value: 2, viewValue: 'Arquero' },
    { value: 3, viewValue: 'Defensa' },
  ];

  
  onChangeOption(option: string) {
    this.selectedOption = option;
  }
}
