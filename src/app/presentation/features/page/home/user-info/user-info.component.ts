import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  imagen: string = '../../../../assets/ichigo_ulquiorra.jpg'
  descripcion: string = 'jhon';
  nombre: string = 'jhon';

  slidesPerView = 1;
  paginationEnabled = true;
  navigationEnabled = true;
  autoplayDelay: string = 'salchichon';
  autoplaypauseOnMouse = true;
}
