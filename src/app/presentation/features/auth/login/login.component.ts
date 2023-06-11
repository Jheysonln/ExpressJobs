import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAuth } from 'src/app/core/interfaces/AuthInterface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{ GlobalConstants } from '../../../../common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription;
  loguinForm!: FormGroup;
  hide = true;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) {
    this.initFormAuth();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.obtenerProductos();

    // const producto = 
    //   {
    //     "nombre": "Jhonatan 6",
    //     "precio": 23.34,
    //     "descripcion": "Descripción del producto"
    //   }

    // this.authService.createProducto$(producto).subscribe({
    //   next: response => {
    //     // Manejar la respuesta exitosa
    //     console.log(response);
    //   },
    //   error: error => {
    //     // Manejar el error
    //     console.error(error);
    //   },
    //   complete: () => {
    //     // Manejar la finalización (opcional)
    //     // console.log('Completado');
    //   }
    // });

    // const id_productoparaActualizar = 8;
    // const updateProducto = {
    //   nombre: "jorge",
    //   precio: 23.34,
    //   descripcion: "Descripción del producto"
    // }

    // this.authService.updateProducto$(id_productoparaActualizar,updateProducto).subscribe({
    //   next: response => {
    //     // Manejar la respuesta exitosa
    //     console.log(response);
    //   },
    //   error: error => {
    //     // Manejar el error
    //     console.error(error);
    //   },
    //   complete: () => {
    //     // Manejar la finalización (opcional)
    //     // console.log('Completado');
    //   }
    // });

    // const id_eliminar = 13;
    // this.authService.deleteProducto$(id_eliminar).subscribe({
    //   next: response => {
    //     // Manejar la respuesta exitosa
    //     console.log(response);
    //   },
    //   error: error => {
    //     // Manejar el error
    //     console.error(error);
    //   },
    //   complete: () => {
    //     // Manejar la finalización (opcional)
    //     // console.log('Completado');
    //   }
    // });


  }


  // obtenerProductos(){
  //   this.authService.obtenerProductos$().subscribe({
  //     next: response => {
  //       // Manejar la respuesta exitosa
  //       this.ListaProductos = response;
  //       console.log(this.ListaProductos);
  //     },
  //     error: error => {
  //       console.error(error);
  //     },
  //     complete: () => {
  //     }
  //   });
  // }

  initFormAuth(): void {
    this.loguinForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@(hotmail\\.com|gmail\\.com|cibertec\\.edu\\.pe)$")]),
      password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern('[^ ]*$')])
    })
  }

  btnLogin(): void {
    // const login: IAuth = {
    //   email: 'nikole@cibertec.edu.pe',
    //   password: 'Cibertec123',
    // };
    const login: IAuth = {
      email: this.loguinForm.get('email')?.value,
      password: this.loguinForm.get('password')?.value,
    };

    this.subscription?.add(
      this._authService.login$(login).subscribe({
        next: response => {
          if (response) {
            this.router.navigate(['/home']);
          }
          console.log(response);
        },
        error: error => {
          console.error(error);
        }
      }));
  }

  getErrorMessaje(field: string, length: number): string {
    let message: string = "";
    if (this.loguinForm.get(field)?.errors?.['required']) {
      message = 'Este campo es requerido';
    }
    else if (this.loguinForm.get(field)?.hasError('minlength')) {
      const minlength = this.loguinForm.get(field)?.errors?.['minlength'].requiredLength;
      message = `Minimo ${minlength} caracteres`;
    }
    else if (this.loguinForm.get(field)?.hasError('maxlength')) {
      const maxlength = this.loguinForm.get(field)?.errors?.['maxlength'].requiredLength;
      message = `Maximo ${maxlength} caracteres`;
    }
    else if (this.loguinForm.get(field)?.hasError('pattern')) {
      if (field == 'email') {
        message = 'Formato Incorrecto';
      }
      else if (field == 'password') {
        message = 'No se permiten espacios';
      }
    }
    return message;
  }
}
