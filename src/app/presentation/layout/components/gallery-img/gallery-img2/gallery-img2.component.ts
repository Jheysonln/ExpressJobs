import { Component } from '@angular/core';
import { AppService } from 'src/app/data/services/app.service';

@Component({
  selector: 'app-gallery-img2',
  templateUrl: './gallery-img2.component.html',
  styleUrls: ['./gallery-img2.component.scss']
})
export class GalleryImg2Component {
  urls: string[] = [
    '../../../../../../assets/aizen.jpg',
    '../../../../../../assets/ichigo_ulquiorra.jpg',
    '../../../../../../assets/naruto_sasuke.jpg',
    '../../../../../../assets/naruto_sasuke.jpg',
    '../../../../../../assets/naruto_sasuke.jpg'
  ];

  constructor(private appService: AppService){}

  openFullScreen(url: string) {
    this.appService.setIsFullScreen(true);
    this.appService.setFullscreenImageUrl(url);
    document.body.classList.add('hide');
  }
}
