import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  email!: string;
  password!: string;
  
  constructor(
    private http: HttpClient,
    private router: Router
    )
    {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

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
