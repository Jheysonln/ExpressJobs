import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  
  result:any;

  ListaProductos: any;



  constructor(private authService : AuthService){
  

    // const id_producto = 10;
    // this.authService.obtenerProductosId$(id_producto).subscribe({
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

    // const producto = {
    //   nombre: "Jhonatan 6",
    //   precio: 23.34,
    //   descripcion: "Descripción del producto"
    // }

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
}
