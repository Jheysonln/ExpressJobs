import { Component } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent {
  chargeMaps: boolean = false;
  options?: google.maps.MapOptions;
  markers: any;

  // step = 0;
  step? : number;

  foods: any[] = [
    { value: 1, viewValue: 'Delantero' },
    { value: 2, viewValue: 'Arquero' },
    { value: 3, viewValue: 'Defensa' },
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step!++;
  }

  prevStep() {
    this.step!--;
  }

  constructor() {
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
