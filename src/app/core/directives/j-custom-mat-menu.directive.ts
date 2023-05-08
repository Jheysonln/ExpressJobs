import { Directive, HostListener, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Directive({
  selector: '[jcustommatmenu]'
})
export class JCustomMatMenuDirective {

  private existsOVerlay = false;
  private unicTrigger!: MatMenuTrigger;
  @Input('jcustommatmenu') triggerList!: any;

  @HostListener('document:click', ['$event']) onClick($event: any) {
    const path =  $event.path || ($event.composedPath && $event.composedPath());
    const matMenuElementRefExists = path.find((element: any) => {
      if (element.classList) {
        const existsClass = element.classList.contains('mat-mdc-menu-trigger');
        if (existsClass) {
          return element;
        }
      }
    });

    if (matMenuElementRefExists && matMenuElementRefExists.id !== "") {
      const filtertrigger = Object.values(this.triggerList[0]);
      filtertrigger.forEach((trigger: any) => {
        if (trigger['_element'].nativeElement.id === matMenuElementRefExists.id && trigger.menu.hasBackdrop === false) {
          this.unicTrigger = trigger;
          this.openUnicTrigger();
        }
        else {
          if(trigger.menu.hasBackdrop === false){
            this.closeTriggers(trigger);
          }
        }
      });
    }
    else if (this.existsOVerlay === true) {
      this.closeUnicTrigger();
    }
  }

  openUnicTrigger() {
    this.existsOVerlay = true;
  }

  closeUnicTrigger() {
    this.existsOVerlay = false;
    this.unicTrigger.closeMenu();
    this.unicTrigger.updatePosition();
  }

  closeTriggers(trigger: MatMenuTrigger) {
    if (trigger.menuOpen === true) {
      trigger.closeMenu();
      trigger.updatePosition();
    }
  }
}
