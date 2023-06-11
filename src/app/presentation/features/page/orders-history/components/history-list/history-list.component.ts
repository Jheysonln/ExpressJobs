import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ],
})
export class HistoryListComponent {
  columnsHeader: any[] = [];
  expandedElement!: string | null;
  listProducts: any[] = [];


  constructor(){
    this.columnsHeader = ['fecha_de_elaboracion', 'trabajador', 'monto_total', 'medio_de_pago', 'estado'];
    this.listProducts = [
      {
        trackingId: '#55879',
        productsImg: 'assets/images/products/15.png',
        trabajador: 'Light Red T-Shirt',
        fecha_de_elaboracion: '22 Jun, 2020',
        estado: 'Completed',
        monto_total: '#149.25',
        medio_de_pago: `Yape`,
      },
      {
        trackingId: '#55879',
        productsImg: 'assets/images/products/15.png',
        trabajador: 'Light Red T-Shirt',
        fecha_de_elaboracion: '22 Jun, 2020',
        estado: 'Completed',
        monto_total: '#149.25',
        medio_de_pago: `Yape`,
      },
      {
        trackingId: '#55879',
        productsImg: 'assets/images/products/15.png',
        trabajador: 'Light Red T-Shirt',
        fecha_de_elaboracion: '22 Jun, 2020',
        estado: 'Completed',
        monto_total: '#149.25',
        medio_de_pago: `Yape`,
      },
      {
        trackingId: '#55879',
        productsImg: 'assets/images/products/15.png',
        trabajador: 'Light Red T-Shirt',
        fecha_de_elaboracion: '22 Jun, 2020',
        estado: 'Completed',
        monto_total: '#149.25',
        medio_de_pago: `Yape`,
      },
      {
        trackingId: '#55879',
        productsImg: 'assets/images/products/15.png',
        trabajador: 'Light Red T-Shirt',
        fecha_de_elaboracion: '22 Jun, 2020',
        estado: 'Completed',
        monto_total: '#149.25',
        medio_de_pago: `Yape`,
      }
    ];
  }

  geheaderTable(header: string) {
    let headerName = header;
    switch (headerName) {
      case 'trackingId':
        headerName = 'Tracking Id';
        break;
      case 'productsName':
        headerName = 'Products Name';
        break;
      case 'date':
        headerName = 'Date';
        break;
      case 'status':
        headerName = 'Status';
        break;
      case 'price':
        headerName = 'Price';
        break;
      default:
        headerName = header;
    }

    return headerName;
  }
}
