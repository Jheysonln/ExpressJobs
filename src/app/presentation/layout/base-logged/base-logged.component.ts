import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AppService } from 'src/app/data/services/app.service';

@Component({
  selector: 'app-base-logged',
  templateUrl: './base-logged.component.html',
  styleUrls: ['./base-logged.component.scss']
})
export class BaseLoggedComponent  implements OnInit {
  collapsedNav!: boolean;
  isMovil!: boolean;
  @ViewChild("snav") snav!: MatDrawer;
  @ViewChild("sideNavSwitcher") sNavSwitcher!: MatDrawer;
  @HostBinding('class') className = '';
  sidebarColor: string = "";


  constructor(private breakpointObserver: BreakpointObserver, private overlay: OverlayContainer, private appService: AppService, private renderer: Renderer2) {
    this.appService.sidebarNewColor.subscribe((color) => this.updateSidebarColor(color));
  }
  ngOnInit(): void {
    this.initToogled();
  }

  initToogled() {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe((state: BreakpointState) => {
      this.isMovil = (state.matches) ? true : false;
      this.collapsedNav = false;
    });
  }

  
  updateSidebarColor(color: string) {
    this.sidebarColor = color;
  }

  //OUTPUT EVENT
  btnToogled() {
    if (!this.isMovil) {//Si no es movil
      this.collapsedNav = !this.collapsedNav;
      return;
    }
    this.snav.opened = true;
  }

  btnToogledSwitch() {
    this.sNavSwitcher.opened = !this.sNavSwitcher.opened;
  }

  btnCloseSidenav(){
    if (this.isMovil) {
      this.snav.opened = false;
    }
  }

  //OUTPUT EVENT
  changeTheme(theme: string | null) {
    const updateTheme = theme;
    const addTheme = theme + 'Mode';
    const overlayContainerClasses = this.overlay.getContainerElement().classList;
    switch (updateTheme) {
      case 'light':
        this.className = addTheme;
        overlayContainerClasses.add(addTheme);
        overlayContainerClasses.remove('darkMode');
        break;
      case 'dark':
        this.className = addTheme;
        overlayContainerClasses.add(addTheme);
        overlayContainerClasses.remove('lightMode');
        break;
      case 'dark':
        this.className = addTheme;
        overlayContainerClasses.add(addTheme);
        overlayContainerClasses.remove('lightMode');
        break;
      default:
        this.className = 'lightMode';
        overlayContainerClasses.add('lightMode');
        overlayContainerClasses.remove('darkMode');
    }

    localStorage.setItem("themeApp", String(updateTheme));
    this.appService.changeTheme(String(updateTheme));
  }
}
