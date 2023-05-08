import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
declare var $: any;//usamos jquery

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  data = of([
    {
      title: '',
      descripcion: 'Home',
      url: '/home',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Ranking',
      url: '/ranking',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Offers',
      url: '/offers',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Order History',
      url: '/history',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Services Provided',
      url: '/services',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      title: 'Settings'
    },
    {
      title: '',
      descripcion: 'Maintenance',
      url: '',
      icon: 'bx bx-cart-alt',
      subitem: [
        {
          descripcion: 'Users',
          url: '/maintenance/users'
        },
        {
          descripcion: 'Categories',
          url: '/maintenance/categories'
        },
      ],
    },
    {
      title: '',
      descripcion: 'Reports',
      url: '',
      icon: 'bx bx-home',
      subitem: [
       
        {
          descripcion: 'Users',
          url: '/reports/users'
        },
        {
          descripcion: 'Categories',
          url: '/reports/categories'
        }
      ],
    }
  ]);

  info: any[] = [
    {
      title: 'Info'
    },
    {
      title: '',
      descripcion: 'About Us',
      url: '/aboutUs',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Contact Us',
      url: '/contactUs',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    }
  ]
  datos: any;
  @Output() toggleEventCloseSidenav = new EventEmitter<void>();
  @Input() collapsedNav!: boolean;
  @Input() isMovil!: boolean;
  @ViewChild("content") content!: ElementRef;

  constructor(private _router: Router, private renderer: Renderer2) {
    this.data.subscribe((res) => this.datos = [...res, ...this.info])
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('#menu').metisMenu();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.collapsedNav = (changes['collapsedNav']) ? changes['collapsedNav'].currentValue : this.collapsedNav;
    this.isMovil = (changes['isMovil']) ? changes['isMovil'].currentValue : this.isMovil;
  }

  onGetRoutes(url: string) {
    if (url) {
      this._router.navigate([url])
      this.toggleEventCloseSidenav.emit();
      const menu = $(".metismenu li > a");
      for (var i = 0; i < menu.length; i++) {
        const _id = menu[i].id;
        if (_id && _id !== url) {
          const elem = document.getElementById(_id)?.parentElement;
          elem!.classList.remove("mm-active");
        }
      };
    }
  }

  ngOnDestroy() {
  }
}
