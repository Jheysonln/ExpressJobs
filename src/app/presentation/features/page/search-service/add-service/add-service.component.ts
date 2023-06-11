import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { from, fromEvent, map } from 'rxjs';
import { setMaterialColor } from 'src/app/core/utilities/app';
import { AppService } from 'src/app/data/services/app.service';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  foods: any[] = [
    { value: 1, viewValue: 'Delantero' },
    { value: 2, viewValue: 'Arquero' },
    { value: 3, viewValue: 'Defensa' },
  ];

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  matColor: ThemePalette = 'primary';

  chargeMaps: boolean = false;
  options?: google.maps.MapOptions;
  markers: any;

  constructor(private appService: AppService) {
    this.appService.headerNewColor.subscribe((color) => this.matColor = setMaterialColor(color));

    this.getMaps();

  }
  getMaps() {
    this.chargeMaps = true;
    this.options = {
      center: { lat: -12.185800090331304, lng: -77.01390461534498 },
      zoom: 8,
      // clickableIcons:true,
      // disableDefaultUI:true,
      // draggable:true,
      // streetViewControl:true,
      mapTypeId: 'hybrid'
    };
    // mark : google.maps.Marker({ position: , map: this.map });
    this.markers = [
      {
        position: {
          lat: -12.185800090331304,
          lng: -77.01390461534498
        },
        label: "A",
        draggable: true,
        visible: false,
        opacity: 0.7
      }
    ];
  }


}