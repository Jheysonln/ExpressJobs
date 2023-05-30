import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  email!: string;
  password!: string;
  result:any;

  ListaProductos: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService : AuthService
    )
    {
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos(){
    this.authService.obtenerProductos$().subscribe({
      next: response => {
        // Manejar la respuesta exitosa
        this.ListaProductos = response;
        console.log(this.ListaProductos);
      },
      error: error => {
        // Manejar el error
        console.error(error);
      },
      complete: () => {
        // Manejar la finalización (opcional)
        // console.log('Completado');
      }
    });
  }

  login() {

    const headers = new HttpHeaders()
    .append(
      'Access-Control-Allow-Origin',
      '*'
    )
    .append(
      'Access-Control-Allow-Methods',
      'DELETE, POST, GET, OPTIONS'
    )
    .append(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With'
    )
    .append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    )
    .append(
      'Access-Control-Allow-Credentials',
      'true'
    );

    const body = {};

    const params = new HttpParams()
        .append('email', this.email)
        .append('password', this.password)

    this.http
    .post<any>('http://localhost:8080/usuario/login', body, {
        headers: headers,
        params: params,
    })
    .subscribe((res) => {

      if(res.respuesta==='ok'){
        this.router.navigate(['/home']);
      }else{
        console.log('error login');
      }
    }
     
    );
  }
  
}
