import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { AppService } from 'src/app/data/services/app.service';
declare var $: any;//usamos jquery

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  data = of([
    {
      id:1,
      title: '',
      descripcion: 'Home',
      url: '/home',
      icon: 'bx bx-home',
      provided: '',
      active:false,
      classActive:'',
      subitem: [],
    },
    {
      id:2,
      title: '',
      descripcion: 'Ranking',
      url: '/ranking',
      icon: 'bx bx-line-chart',
      provided: '',
      active:false,
      classActive:'',
      subitem: [],
    },
    {
      id:3,
      title: '',
      descripcion: 'Offers',
      url: '/offers',
      icon: 'bx bx-briefcase-alt-2',
      provided: '',
      active:false,
      classActive:'',
      subitem: [],
    },
    {
      id:4,
      title: '',
      descripcion: 'Order History',
      url: '/history',
      icon: 'bx bx-show-alt',
      provided: '',
      active:false,
      classActive:'',
      subitem: [],
    },
    {
      id:5,
      title: '',
      descripcion: 'Services Provided',
      url: '/services',
      icon: 'bx bx-briefcase-alt-2',
      provided: '',
      active:false,
      classActive:'',
      subitem: [],
    },
    {
      id:6,
      title: 'Settings',
      descripcion: '',
      url: '',
      icon: '',
      provided: '',
      active:false,
      classActive:'',
      subitem: [],
    },
    {
      id:7,
      title: '',
      descripcion: 'Maintenance',
      url: '',
      icon: 'bx bx-cart-alt',
      provided: 'maintenance',
      active:false,
      classActive:'',
      subitem: [
        {
          id:1,
          idMenu:7,
          descripcion: 'Users',
          url: '/maintenance/users',
          active: false,
          classActive:'',
        },
        {
          id:2,
          idMenu:7,
          descripcion: 'Categories',
          url: '/maintenance/categories',
          active: false,
          classActive:'',
        },
      ],
    },
    {
      id:8,
      title: '',
      descripcion: 'Reports',
      url: '',
      icon: 'bx bx-home',
      provided: 'reports',
      active:false,
      classActive:'',
      subitem: [
        {
          id:1,
          idMenu:8,
          descripcion: 'Users',
          url: '/reports/users',
          active: false,
          classActive:'',
        },
        {
          id:2,
          idMenu:8,
          descripcion: 'Categories',
          url: '/reports/categories',
          active: false,
          classActive:'',
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

  colorChange = "";
  linkActiveColor = "";
  sidenavheaderColor = "";

  url: string = "";


  activeLink = "";

  constructor(private _router: Router, private renderer: Renderer2, private appService: AppService,private cdr: ChangeDetectorRef) {
    this.data.subscribe((res) => this.datos = [...res, ...this.info])
    // this.appService.sidebarNewColor.subscribe((color) => this.changeColorLinkActive(color));
    this.appService.headerNewColor.subscribe((color) => this.changeColorLinkActive(color));
    this.appService.newTheme.subscribe((color) => this.changeColorSidenavhHeader(color));

    // this.subscription = this.appService.getBreadcrumbs$().subscribe(ruta => {
    //   console.log(ruta)
    //   const ultimaRuta = ruta[ruta.length - 1];
    //   this.url = ultimaRuta.url;
    // });
  }


  ngOnInit(): void {
    this.changeColorLinkActive("j-mat-primary");
    this.changeColorSidenavhHeader("j-mat-primary");

  }

  ngAfterViewInit(): void {
    $('#menu').metisMenu();
    this.setActiveRoute();
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.collapsedNav = (changes['collapsedNav']) ? changes['collapsedNav'].currentValue : this.collapsedNav;
    this.isMovil = (changes['isMovil']) ? changes['isMovil'].currentValue : this.isMovil;
  }

    onGetRoutes(id: number) {
    this.datos.forEach((item:any) => {
      if (item.id === id) {
        if(item.url){
          this._router.navigate([item.url]);
          this.toggleEventCloseSidenav.emit();
        }
        item.active = true;
        item.classActive = "mm-active-two";
      } else {
        item.active = false;
        item.classActive = "";
      }
    });
  }

  onGetSubRoutes(id:number,idMenu:number){
    this.datos.forEach((item:any) => {
      item.subitem && item.subitem.forEach((element:any) => {
        if (element.id === id && element.idMenu === idMenu) {
          this._router.navigate([element.url])
          element.active = true;
          element.classActive = "mm-actives-two";
        } else {
          element.active = false;
          element.classActive = "";
        }
      });
    });
  }



  changeColorLinkActive(color: string) {
    this.colorChange = color;
    if (this.colorChange == "j-mat-accent") {
      this.linkActiveColor = 'mat-active-accent'
    }
    else if (this.colorChange == "j-mat-warn") {
      this.linkActiveColor = 'mat-active-warn'
    }
    else if (this.colorChange == "j-mat-primary") {
      this.linkActiveColor = 'mat-active-primary'
    }
    else {
      this.colorChange = 'mat-active-primary'
    }
    this.changeColorSidenavhHeader(color);
  }

  changeColorSidenavhHeader(color: string) {
    const exists = localStorage.getItem("themeApp");
    const theme = exists ? exists : 'light';
    this.sidenavheaderColor = theme === 'light' ? this.colorChange : "";
  }

  setActiveRoute() {
   
    // const separatorRoute = this._router.url.split('/').filter(u => u !== '');
    // const Router = separatorRoute.map((url) => ({ url: `/${url}` }));

    // Router.forEach((route)=>{
      // const menu = $(".metismenu li > a");
      // for (var i = 0; i < menu.length; i++) {
      //   const _id = menu[i].id;
      //   if (_id && _id !== urlCollection.url) {
      //     const elem = document.getElementById(_id)?.parentElement;
      //     elem!.classList.remove("mm-active");
      //   }
      //   else if (_id && _id === urlCollection.url) {
      //     console.log(_id);
      //     const elem = document.getElementById(_id)?.parentElement;
      //     elem!.classList.add("mm-active");
      //   }
      // };
      console.log(this._router.url);
      this.datos.forEach((item:any) => {
        if(item.subitem && item.subitem.length > 0){
          let idMenu = 0;
          item.subitem.forEach((element:any) => {
            if (element.url === this._router.url) {
              this._router.navigate([element.url])
              element.active = true;
              element.classActive = "mm-actives-two";
              // idMenu = element.id;

              item.active = true;
              item.classActive = "mm-actives-two";

              // console.log(item);

            } else {
              element.active = false;
              element.classActive = "";
            }
          });
        }
        else{
          this.datos.forEach((data:any) => {
              if (data.url && data.url === this._router.url) {
                this._router.navigate([data.url]);
                data.active = true;
                data.classActive = "mm-active-two";
              } 
              // else if(){
      
              // }
              else {
                data.active = false;
                data.classActive = "";
              }
            });
        }
      });
      
      console.log(this.datos);
      // this.datos.forEach((data:any) => {
      //   if (data.url && data.url === route.url) {
      //     this._router.navigate([data.url]);
      //     data.active = true;
      //     data.classActive = "mm-active-two";
      //   } 
      //   // else if(){

      //   // }
      //   else {
      //     data.active = false;
      //     data.classActive = "";
      //   }
      // });
    //})

    // this.datos.forEach((item:any) => {
    //   if (item.id === id) {
    //     if(item.url){
    //       this._router.navigate([item.url]);
    //       this.toggleEventCloseSidenav.emit();
    //     }
    //     item.active = true;
    //     item.classActive = "mm-active-two";
    //   } else {
    //     item.active = false;
    //     item.classActive = "";
    //   }
    // });
  }

  ngOnDestroy() {
  }
}
