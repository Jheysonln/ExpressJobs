import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnDestroy{
  subscription: Subscription = new Subscription;

  imageUrl: string = '../../../../../assets/aizen.jpg';

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


