
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-base-auth',
  templateUrl: './base-auth.component.html',
  styleUrls: ['./base-auth.component.scss']
})
export class BaseAuthComponent implements OnInit {


  constructor() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnInit(): void {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    const body = document.body;
    const html = document.documentElement;
    const scrollPosition = (isFirefox) ? html.scrollTop : body.scrollTop;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  //ESTE METODO HACE QUE EL SCROLL DE FIREFOX FUNCIONE CORRECTAMENTE 
  onActivate(event: any) {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}