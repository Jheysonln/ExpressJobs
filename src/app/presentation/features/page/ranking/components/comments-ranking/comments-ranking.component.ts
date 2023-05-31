import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-ranking',
  templateUrl: './comments-ranking.component.html',
  styleUrls: ['./comments-ranking.component.css']
})
export class CommentsRankingComponent {

  countries: any[] = [
    {
      "name": "Daisy Anderson",
      "flag": "assets/images/avatars/avatar-1.png"
    },
    {
      "name": "Althea Cabardo",
      "flag": "assets/images/avatars/avatar-2.png"
    },
    {
      "name": "Oscar Garner",
      "flag": "assets/images/avatars/avatar-3.png"
    },
    {
      "name": "Katherine Pechon",
      "flag": "assets/images/avatars/avatar-4.png"
    },
    {
      "name": "Amelia Doe",
      "flag": "assets/images/avatars/avatar-5.png"
    },
    {
      "name": "Cristina Jhons",
      "flag": "assets/images/avatars/avatar-6.png"
    }
  ];
}
