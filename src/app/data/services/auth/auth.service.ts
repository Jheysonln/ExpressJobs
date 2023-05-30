import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private MyAppUrl = environment.apiUrl;
  private MyApiUrl = '/api/productos/';

  constructor(private http: HttpClient) { }

  obtenerProductos$(): Observable<any[]> {
    let name = "obtenerProductos";
    return this.http.get<any[]>(this.MyAppUrl + this.MyApiUrl + name)
  }

  obtenerProductosId$(id_producto: number): Observable<HttpResponse<any[]>> {
    let name = "obtenerProductoId/";
    return this.http.get<any[]>(this.MyAppUrl + this.MyApiUrl + name + id_producto, { observe: 'response' })
  }

  updateProducto$(id_productoparaActualizar: number, updateProducto: any) {
    let name = "actualizarProducto/";
    const newProducto = JSON.stringify(updateProducto);
    console.log(this.MyAppUrl + this.MyApiUrl + name + id_productoparaActualizar);
    return this.http.put<boolean>(this.MyAppUrl + this.MyApiUrl + name + id_productoparaActualizar, newProducto, { headers: { 'Content-Type': 'application/json' } }).pipe(
      catchError(error => {
        // Aquí puedes manejar el error
        console.error(error);
        throw new Error('Error al actualizar el producto');
      })
    );
  }

  createProducto$(producto: any) {
    let name = "crearProducto";
    const newProducto = JSON.stringify(producto);
    return this.http.post<boolean>(this.MyAppUrl + this.MyApiUrl + name, newProducto, { headers: { 'Content-Type': 'application/json' } }).pipe(
      catchError(error => {
        // Aquí puedes manejar el error
        console.error(error);
        throw new Error('Error al crear el producto');
      })
    );
  }

  deleteProducto$(id_producto: number) {
    let name = "eliminarProducto/";
    return this.http.delete<boolean>(this.MyAppUrl + this.MyApiUrl + name + id_producto).pipe(
      catchError(error => {
        // Aquí puedes manejar el error
        console.error(error);
        throw new Error('Error al crear el producto');
      })
    );
  }


}
