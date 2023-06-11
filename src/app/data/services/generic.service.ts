import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IMenu } from 'src/app/core/interfaces/DashboardInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  private MyAppUrl = environment.apiUrl;
  private MyApiUrl = '/api/generic/';

  constructor(private http: HttpClient, private orRouter: Router) {
  }

  obtenerDashboard$(rol: string): Observable<IMenu[]> {
    let name = "obtenerDashboard";
    const requestBody = {
      des_rol: rol
    };
    console.log(JSON.stringify(requestBody));
    return this.http.post<IMenu[]>(this.MyAppUrl + this.MyApiUrl + name, requestBody);
  }

}
