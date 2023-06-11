import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { setMaterialColor } from 'src/app/core/utilities/app';
import { AppService } from 'src/app/data/services/app.service';

@Component({
  selector: 'app-search-ranking',
  templateUrl: './search-ranking.component.html',
  styleUrls: ['./search-ranking.component.css']
})
export class SearchRankingComponent {

  foods: any[] = [
    { value: 1, viewValue: 'Delantero' },
    { value: 2, viewValue: 'Arquero' },
    { value: 3, viewValue: 'Defensa' },
  ];

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  matColor: ThemePalette = 'primary';

  constructor(private appService: AppService) {
    this.appService.headerNewColor.subscribe((color) => this.matColor = setMaterialColor(color));
   
  }

}
