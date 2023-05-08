import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ignoreElements, of } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
declare var $: any;//usamos jquery
@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit{

  @Output() themeEvent = new EventEmitter<string | null>();
  themeList: string[] = ['light', 'dark', 'transparent'];
  selectedTheme = new FormControl('light');
  
  constructor(private appService: AppService){}

  ngOnInit(): void {
    this.selectedTheme.valueChanges.subscribe((theme) =>this.themeEvent.emit(theme));
    this.isExistThemelocalStorage();
  }

  isExistThemelocalStorage(){
    const exists = localStorage.getItem("themeApp");
    const theme = exists ? exists : 'light';
    if(theme){
      setTimeout(() => this.selectedTheme.setValue(theme), 0);
    }
  }

  setHeaderColor(event:HTMLDivElement){
    const color = event.id;
    this.appService.changeHeaderColor(String(color));
  }

  setSidebarColor(event:MouseEvent){
    const color = (event.target as HTMLDivElement).id;
    this.appService.changeSidebarColor(String(color));
  }
}
