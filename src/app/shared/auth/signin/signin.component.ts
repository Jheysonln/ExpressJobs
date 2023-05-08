import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements AfterViewInit{
  hide = true;
  
  constructor(){
  }

  ngAfterViewInit() {
  }
}
