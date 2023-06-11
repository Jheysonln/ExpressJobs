import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { IMenu, ISubmenu } from 'src/app/core/interfaces/DashboardInterface';
import { IUsuario } from 'src/app/core/interfaces/UserInterface';
import { ReplaceCharacterDashboard } from 'src/app/core/pipe/replaceCharacterDashboard';
import { AppService } from 'src/app/data/services/app.service';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { GenericService } from 'src/app/data/services/generic.service';
import { UserService } from 'src/app/data/services/user/user.service';
declare var $: any;//usamos jquery

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  data = of([
    {
      id: 1,
      title: '',
      descripcion: 'Home',
      url: '/home',
      icon: 'bx bx-home',
      provided: '',
      active: false,
      classActive: '',
      subitem: [],
    },
    {
      id: 2,
      title: '',
      descripcion: 'Search Service',
      url: '/search-service',
      icon: 'bx bx-home',
      provided: '',
      active: false,
      classActive: '',
      subitem: [],
    },
    {
      id: 3,
      title: '',
      descripcion: 'Ranking',
      url: '/ranking',
      icon: 'bx bx-line-chart',
      provided: '',
      active: false,
      classActive: '',
      subitem: [],
    },
    {
      id: 4,
      title: '',
      descripcion: 'Offers',
      url: '/offers',
      icon: 'bx bx-briefcase-alt-2',
      provided: '',
      active: false,
      classActive: '',
      subitem: [],
    },
    {
      id: 5,
      title: '',
      descripcion: 'Order History',
      url: '/history',
      icon: 'bx bx-show-alt',
      provided: '',
      active: false,
      classActive: '',
      subitem: [],
    },
    {
      id: 6,
      title: '',
      descripcion: 'Services Provided',
      url: '/services',
      icon: 'bx bx-briefcase-alt-2',
      provided: '',
      active: false,
      classActive: '',
      subitem: [],
    },
    {
      id: 7,
      title: 'Settings',
      descripcion: '',
      url: '',
      icon: '',
      provided: '',
      active: false,
      classActive: '',
      subitem: [],
    },
    {
      id: 8,
      title: '',
      descripcion: 'Maintenance',
      url: '',
      icon: 'bx bx-cart-alt',
      provided: 'maintenance',
      active: false,
      classActive: '',
      subitem: [
        {
          id: 1,
          idMenu: 8,
          descripcion: 'Users',
          url: '/maintenance/users',
          active: false,
          classActive: '',
        },
        {
          id: 2,
          idMenu: 8,
          descripcion: 'Categories',
          url: '/maintenance/categories',
          active: false,
          classActive: '',
        },
      ],
    },
    {
      id: 9,
      title: '',
      descripcion: 'Reports',
      url: '',
      icon: 'bx bx-home',
      provided: 'reports',
      active: false,
      classActive: '',
      subitem: [
        {
          id: 1,
          idMenu: 9,
          descripcion: 'Users',
          url: '/reports/users',
          active: false,
          classActive: '',
        },
        {
          id: 2,
          idMenu: 9,
          descripcion: 'Categories',
          url: '/reports/categories',
          active: false,
          classActive: '',
        }
      ],
    }
  ]);

  info: IMenu[] = [
    {
      id_menu: 10,
      title: 'Info'
    },
    {
      id_menu: 11,
      title: '',
      description: 'About Us',
      url: '/aboutUs',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      id_menu: 12,
      title: '',
      description: 'Contact Us',
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



  subscription: Subscription = new Subscription;
  menus?: IMenu[];
  rol: string = "";
  email: string = "";
  usuario? : IUsuario;
  userRol? : string;

  @ViewChild('menuElement') menuElement!: ElementRef;

  constructor(
    private _router: Router,
    private _genericService: GenericService,
    private _userService: UserService,
    private appService: AppService,
    private cdr: ChangeDetectorRef,
    private _authService: AuthService,
    private elementRef: ElementRef, private renderer: Renderer2,
    private replaceCharacterDashboard:ReplaceCharacterDashboard) {
    // this.data.subscribe((res) => this.datos = [...res, ...this.info])
    this.subscription.add(this._authService.userProfile$.subscribe((rol: string) => this.rol = rol));
    this.subscription.add(this._authService.userEmail$.subscribe((email: string) => this.email = email));
    this.appService.headerNewColor.subscribe((color) => this.changeColorLinkActive(color));
    this.appService.newTheme.subscribe((color) => this.changeColorSidenavhHeader(color));
  }


  ngOnInit(): void {
    this.obtenerDashboard(this.rol);
    this.obtenerEmail(this.email);
    this.changeColorLinkActive("j-mat-primary");
    this.changeColorSidenavhHeader("j-mat-primary");
  }

  obtenerDashboard(rol: string) {
    if (rol) this._genericService.obtenerDashboard$(rol).subscribe(res => this.menus = [...res, ...this.info]);
  }

  obtenerEmail(email: string) {
    if (email) this._userService.obtenerUsuarioEmail$(email).subscribe((res:IUsuario) => {
      if(res && res.roles && res.roles.length > 0){
        this.usuario = res;
        this.userRol = this.usuario.roles ? this.usuario.roles[0]?.des_rol : "";
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => { $(document).ready(() => $('#menu').metisMenu({ toggle: false })) }, 100);
    this.cdr.detectChanges();
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.collapsedNav = (changes['collapsedNav']) ? changes['collapsedNav'].currentValue : this.collapsedNav;
    this.isMovil = (changes['isMovil']) ? changes['isMovil'].currentValue : this.isMovil;
  }

  onGetRoutes(id_menu: number) {
    this.menus!.forEach((menu: IMenu) => {
      if (menu.id_menu === id_menu) {
        if (menu.url) {
          this._router.navigate([menu.url]);
          this.toggleEventCloseSidenav.emit();
        }
      } else {
        if(menu.description){
          const menuActiveClass = this.replaceCharacterDashboard.transform(menu.description);
          const menuDesactive = '#' + menuActiveClass;
          const element = this.elementRef.nativeElement.querySelector(menuDesactive);       
          this.renderer.removeClass(element, 'mm-active');
          this.onGetSubRoutes(0,0);

          if (element instanceof HTMLElement) {
            const childElements = Array.from(element.children);
            if (childElements.length > 0) {
              const anchorElement = childElements.find(element => element.tagName === 'A');
              const ulElement = childElements.find(element => element.tagName === 'UL');
              if (anchorElement && ulElement) {
                anchorElement.setAttribute('aria-expanded', 'false');
                $(ulElement).slideUp().promise().done(() => {
                  this.renderer.removeClass(ulElement, 'mm-show');
                  ulElement.removeAttribute('style');
                });
              }
            } else {
              // El elemento no tiene hijos
            }
          } else {
            // El elemento no es un objeto HTMLElement válido
          }
        }
      }
    });
  }


  onGetSubRoutes(id_menu: number, id_submenu: number) {

    this.menus!.forEach((menu: IMenu) => {
      menu.subitem && menu.subitem.forEach((item: ISubmenu) => {
        if (item.id_submenu === id_submenu && item.id_menu === id_menu) {
          this._router.navigate([item.url])
        } else {
          const menuActiveClass = this.replaceCharacterDashboard.transform((menu?.description || '') + (item?.description || ''));
          const menuDesactive = '#' + menuActiveClass;
          const element = this.elementRef.nativeElement.querySelector(menuDesactive);       
          this.renderer.removeClass(element, 'mm-active');
        }
      });
    });
  }

  removeActive(menuActiveClass:string){
    const menuDesactive = '#' + menuActiveClass;
    const element = this.elementRef.nativeElement.querySelector(menuDesactive);       
    this.renderer.removeClass(element, 'mm-active');
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


  ngOnDestroy() {
  }
}
