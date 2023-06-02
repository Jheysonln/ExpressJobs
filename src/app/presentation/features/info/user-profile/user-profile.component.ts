import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

interface IconOption {
  value: string;
  icon: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  prefixOptions: string[] = ['+51', '+52', '+53'];
  selectedPrefix: string = '+51';
  selectedOption: string = '';

  foods: any[] = [
    { value: 1, viewValue: 'Delantero' },
    { value: 2, viewValue: 'Arquero' },
    { value: 3, viewValue: 'Defensa' },
  ];

  
  onChangeOption(option: string) {
    this.selectedOption = option;
  }
}
