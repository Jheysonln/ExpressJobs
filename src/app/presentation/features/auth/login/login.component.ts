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
    this.router.navigate(['/home']);
    const headers = new HttpHeaders()

    const body = {};

    const params = new HttpParams()
        .append('email', this.email)
        .append('password', this.password)

    this.http
    .post<any>('http://localhost:8080/api/seguridad/login', body, {
        headers: headers,
        params: params,
    })
    .subscribe((res) => {

      if(res.respuesta==='ok'){
        console.log(res);
        this.router.navigate(['/home']);
      }else{
        console.log('error login');
      }
    }
     
    );
  }
  
}
