import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis
} from "ng-apexcharts";
import { AppService } from 'src/app/services/app.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
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
export class SalesComponent implements OnInit {

  columnsHeader: any[] = [];
  expandedElement!: string | null;
  listProducts: any[] = [];
  menus: any = [
    {
      active: false,
      type: 'dropdown',
      img: 'assets/images/avatars/avatar-1.png',
      name: 'Emy Jackson',
      email: 'emy_jac@xyz.com',
      submenus: []
    },
    {
      active: false,
      type: 'dropdown',
      img: 'assets/images/avatars/avatar-2.png',
      name: 'Martin Hughes',
      email: 'martin.hug@xyz.com',
      submenus: []
    },
    {
      active: false,
      type: 'dropdown',
      img: 'assets/images/avatars/avatar-3.png',
      name: 'Laura Madison',
      email: 'laura_01@xyz.com',
      submenus: []
    },
    {
      active: false,
      type: 'dropdown',
      img: 'assets/images/avatars/avatar-4.png',
      name: 'Shoan Stephen',
      email: 's.stephen@xyz.com',
      submenus: []
    },
    {
      active: false,
      type: 'dropdown',
      img: 'assets/images/avatars/avatar-5.png',
      name: 'Keate Medona',
      email: 'Keate@xyz.com',
      submenus: []
    },
    {
      active: false,
      type: 'dropdown',
      img: 'assets/images/avatars/avatar-6.png',
      name: 'Paul Benn',
      email: 'pauly.b@xyz.com',
      submenus: []
    },
    {
      active: false,
      type: 'dropdown',
      img: 'assets/images/avatars/avatar-7.png',
      name: 'Winslet Maya',
      email: 'winslet_02@xyz.com',
      submenus: []
    }
  ];

  ngOnInit(): void {
    this.columnsHeader = ['trackingId', 'productsName', 'date', 'status', 'price','other2'];
    this.listProducts = [
      {
        trackingId: '#55879',
        productsImg: 'assets/images/products/15.png',
        productsName: 'Light Red T-Shirt',
        date: '22 Jun, 2020',
        status: 'Completed',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
        other2:`Hydrogen is a chemical element with symbol H and atomic number 1.`
      },
      {
        trackingId: '#88379',
        productsImg: 'assets/images/products/02.png',
        productsName: 'Grey Headphone',
        date: '22 Jun, 2020',
        status: 'Cancelled',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
      },
      {
        trackingId: '#55879',
        productsImg: 'assets/images/products/17.png',
        productsName: 'Light Red T-Shirt',
        date: '22 Jun, 2020',
        status: 'Completed',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
      },
      {
        trackingId: '#68823',
        productsImg: 'assets/images/products/18.png',
        productsName: 'Grey Headphone',
        date: '22 Jun, 2020',
        status: 'Pending',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
      },
      {
        trackingId: '#54869',
        productsImg: 'assets/images/products/19.png',
        productsName: 'Brown Sofa',
        date: '22 Jun, 2020',
        status: 'Completed',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
      },
      {
        trackingId: '#22536',
        productsImg: 'assets/images/products/03.png',
        productsName: 'Black iPhone 11',
        date: '22 Jun, 2020',
        status: 'Completed',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
      },
      {
        trackingId: '#25796',
        productsImg: 'assets/images/products/04.png',
        productsName: 'Men Yellow T-Shirt',
        date: '22 Jun, 2020',
        status: 'Pending',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
      },
      {
        trackingId: '#98754',
        productsImg: 'assets/images/products/05.png',
        productsName: 'Grey Stand Table',
        date: '22 Jun, 2020',
        status: 'Cancelled',
        price: '#149.25',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
      }
    ];
  }

  toggle2(currentMenu: any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element: any) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu: any) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
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
