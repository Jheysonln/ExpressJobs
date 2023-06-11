import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';

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
  subscription: Subscription = new Subscription;
  imageUrl: string = '../../../../../assets/aizen.jpg';
  
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
  
  uploadFile(event: any) {
    this.subscription = this.changeImg$(event).subscribe((img: string) => this.imageUrl = img);
  }

  changeImg$(event: any): Observable<string> {
    const img$ = new Observable<string>(observer => {
      let file = event.target.files[0];
      let reader = new FileReader();
      let img: string;
      if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          img = reader.result as string;
          observer.next(img);
          observer.complete();
        },
          reader.onerror = err => {
            observer.error(err);
          };
      }
    })
    return img$
  }

}
