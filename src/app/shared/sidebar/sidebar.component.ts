import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, AfterViewInit, HostBinding, ViewChild, Input, SimpleChanges, OnChanges, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { interval, Observable, of, Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
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
      descripcion: 'Dashboard',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'home',
          url: '/dashboard/home'
        },
        {
          descripcion: 'sales',
          url: '/dashboard/sales'
        },
        {
          descripcion: 'shop',
          url: '/dashboard/shop'
        },
        {
          descripcion: 'alternate',
          url: '/dashboard/alternate'
        },
        {
          descripcion: 'hospitality',
          url: '/dashboard/hospitality'
        },
      ],
    },
    {
      title: '',
      descripcion: 'Application',
      url: '',
      icon: 'bx bx-cart-alt',
      subitem: [
        {
          descripcion: 'Email',
          url: '/aplication/email'
        },
        {
          descripcion: 'Chat Box',
          url: '/aplication/chatbox'
        },
        {
          descripcion: 'File Mananger',
          url: '/aplication/filemananger'
        },
        {
          descripcion: 'Contacts',
          url: '/aplication/contacts'
        },
        {
          descripcion: 'Todo List',
          url: '/aplication/todolist'
        },
        {
          descripcion: 'Invoice',
          url: '/aplication/invoice'
        },
        {
          descripcion: 'Calendar',
          url: '/aplication/calendar'
        },
      ],
    },
    {
      title: 'UI ELEMENTS'
    },
    {
      title: '',
      descripcion: 'Widgets',
      url: '/widget/widgets',
      icon: 'bx bx-briefcase-alt-2',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Ecommerce',
      url: '',
      icon: 'bx bx-cart-alt',
      subitem: [
        {
          descripcion: 'Products',
          url: '/ecommerce/products'
        },
        {
          descripcion: 'Products Details',
          url: '/ecommerce/productsDetails'
        },
        {
          descripcion: 'Add New Products',
          url: '/ecommerce/newproducts'
        },
        {
          descripcion: 'Orders',
          url: '/ecommerce/orders'
        },
      ],
    },
    {
      title: '',
      descripcion: 'Components',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Alerts',
          url: '/components/alerts'
        },
        {
          descripcion: 'Accordions',
          url: '/components/accordions'
        },
        {
          descripcion: 'Badges',
          url: '/components/badges'
        },
        {
          descripcion: 'Buttons',
          url: '/components/buttons'
        },
        {
          descripcion: 'Cards',
          url: '/components/cards'
        },
        {
          descripcion: 'Carousels',
          url: '/components/carousels'
        },
        {
          descripcion: 'ListGroups',
          url: '/components/listgroups'
        },
        {
          descripcion: 'Media Objects',
          url: '/components/mediaobjects'
        },
        {
          descripcion: 'Modals',
          url: '/components/modals'
        },
        {
          descripcion: 'Navs & Tabs',
          url: '/components/navTabs'
        },
        {
          descripcion: 'Navbar',
          url: '/components/navbar'
        },
        {
          descripcion: 'Pagination',
          url: '/components/pagination'
        },
        {
          descripcion: 'Popovers & Tooltips',
          url: '/components/popoverstooltips'
        },
        {
          descripcion: 'Progress',
          url: '/components/progress'
        },
        {
          descripcion: 'Spinners',
          url: '/components/spinners'
        },
        {
          descripcion: 'Notifications',
          url: '/components/notification'
        },
        {
          descripcion: 'Avatars & Chips',
          url: '/components/avatars'
        },
      ],
    },
    {
      title: '',
      descripcion: 'Content',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Grid System',
          url: '/content/grid'
        },
        {
          descripcion: 'Typography',
          url: '/content/typhografy'
        },
        {
          descripcion: 'Text Utilities',
          url: '/content/textutility'
        }
      ],
    },
    {
      title: '',
      descripcion: 'Icons',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Line Icons',
          url: '/icon/lineicons'
        },
        {
          descripcion: 'Boxicons',
          url: '/icon/boxicons'
        },
        {
          descripcion: 'Feather Icons',
          url: '/icon/feathericons'
        }
      ],
    },
    {
      title: 'FORMS & TABLES'
    },
    {
      title: '',
      descripcion: 'Forms',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Form Elemts',
          url: '/forms/formelements'
        },
        {
          descripcion: 'Input Groups',
          url: '/forms/inpoutsgroups'
        },
        {
          descripcion: 'Form Layouts',
          url: '/forms/formlayouts'
        },
        {
          descripcion: 'Form Validation',
          url: '/forms/formvalidation'
        },
        {
          descripcion: 'Form Wizard',
          url: '/forms/formwizard'
        },
        {
          descripcion: 'Text Editor',
          url: '/forms/texteditor'
        },
        {
          descripcion: 'File Upload',
          url: '/forms/fileupload'
        },
        {
          descripcion: 'Date Pickers',
          url: '/forms/datepickers'
        },
        {
          descripcion: 'Select2',
          url: '/forms/select2'
        }
      ],
    },
    {
      title: '',
      descripcion: 'Tables',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Basic Table',
          url: '/tables/basicTable'
        },
        {
          descripcion: 'Data Table',
          url: '/tables/dataTable'
        }
      ],
    },
    {
      title: '',
      descripcion: 'Authentication',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Sign In',
          url: '/auth/signin'
        },
        {
          descripcion: 'Sign Up',
          url: '/auth/signup'
        },
        // {
        //   descripcion: 'Sign In with Header & Footer',
        //   url: '/authentication/signiptwo'
        // },
        // {
        //   descripcion: 'Sign Up with Header & Footer',
        //   url: '/authentication/signuptwo'
        // },
        // {
        //   descripcion: 'Forgot Password',
        //   url: '/authentication/forgotpassword'
        // },
        // {
        //   descripcion: 'Reset Password',
        //   url: '/authentication/resetpassword'
        // },
        // {
        //   descripcion: 'Lock Screen',
        //   url: '/authentication/lockscreen'
        // }
      ],
    },
    {
      title: '',
      descripcion: 'User Profile',
      url: 'userprofile/profile',
      icon: 'bx bx-home',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Timelines',
      url: 'timeline/timelines',
      icon: 'bx bx-home',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Errors',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: '404',
          url: '/errors/error404'
        },
        {
          descripcion: '505',
          url: '/errors/error500'
        },
        {
          descripcion: 'Comings Soon',
          url: '/errors/blankpage'
        },
        {
          descripcion: 'Blank Page',
          url: '/errors/comingson'
        }
      ],
    },
    {
      title: '',
      descripcion: 'FAQ',
      url: 'faq/getfaq',
      icon: 'bx bx-home',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Pricing',
      url: 'pricing/getpricing',
      icon: 'bx bx-home',
      subitem: [],
    },
    {
      title: '',
      descripcion: 'Chats',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Apex',
          url: '/charts/apex'
        },
        {
          descripcion: 'Chatsjs',
          url: '/charts/chatsjs'
        },
        {
          descripcion: 'Highcharts',
          url: '/charts/highcharts'
        }
      ],
    },
    {
      title: '',
      descripcion: 'Maps',
      url: '',
      icon: 'bx bx-home',
      subitem: [
        {
          descripcion: 'Google Maps',
          url: '/maps/googlemaps'
        },
        {
          descripcion: 'Vector Maps',
          url: '/maps/vectormaps'
        }
      ],
    },
  ]);
  datos: any;
  @Output() toggleEventCloseSidenav = new EventEmitter<void>();
  @Input() collapsedNav!: boolean;
  @Input() isMovil!: boolean;
  @ViewChild("content") content!: ElementRef;

  constructor(private _router: Router, private renderer: Renderer2) {
    this.data.subscribe((res) => this.datos = res);
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
