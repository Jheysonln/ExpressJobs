import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IUsuario } from 'src/app/core/interfaces/UserInterface';
import { setMaterialColor } from 'src/app/core/utilities/app';
import { AppService } from 'src/app/data/services/app.service';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { UserService } from 'src/app/data/services/user/user.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  @Output() themeEvent = new EventEmitter<boolean | null>();
  @Output() toggleEvent = new EventEmitter<void>();
  @Output() toggleSwitchEvent = new EventEmitter<void>();

  countries: any[] = [
    {
      "name": "Daisy Anderson",
      "flag": "assets/images/avatars/avatar-1.png"
    },
    {
      "name": "Althea Cabardo",
      "flag": "assets/images/avatars/avatar-2.png"
    },
    {
      "name": "Oscar Garner",
      "flag": "assets/images/avatars/avatar-3.png"
    },
    {
      "name": "Katherine Pechon",
      "flag": "assets/images/avatars/avatar-4.png"
    },
    {
      "name": "Amelia Doe",
      "flag": "assets/images/avatars/avatar-5.png"
    },
    {
      "name": "Cristina Jhons",
      "flag": "assets/images/avatars/avatar-6.png"
    }
  ];

  @ViewChild("menuTriggerUserProfile") menuUserProfile!: MatMenuTrigger;
  @ViewChild("menuTriggerAlert") menuAlert!: MatMenuTrigger;
  @ViewChild("menuTriggerMessage") menuMessage!: MatMenuTrigger;
  @ViewChild("menuTriggerSettings") menuSettings!: MatMenuTrigger;
  triggers!: any[];
  headerColor: string = "";

  matColor: ThemePalette = 'primary';
  email?:string;
  
  constructor( private appService: AppService , public _authService : AuthService, private _userService:UserService) {
    // this.appService.headerNewColor.subscribe((color) => this.updateHeaderColor(color));
    this.appService.headerNewColor.subscribe((color) => this.matColor = setMaterialColor(color));
  }

  ngOnInit(): void {
    this._authService.userEmail$.subscribe((email: string) => this.email = email);
  }

  ngAfterContentChecked() {
    this.triggers = [{
      userProfile: this.menuUserProfile,
      alert: this.menuAlert,
      message: this.menuMessage,
      settings: this.menuSettings
    }]
    // this.cdref.detectChanges();
  }

  matMenuTriggersList(): any[] {
    return this.triggers;
  }
}
