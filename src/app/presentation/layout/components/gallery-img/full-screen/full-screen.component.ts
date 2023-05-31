import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from 'src/app/data/services/app.service';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent {
  isFullScreen: boolean = false;
  fullscreenImageUrl: string = '';

  constructor(private appService: AppService) {
    this.appService.isFullScreen$.subscribe(isFullScreen => {
      this.isFullScreen = isFullScreen;
    });

    this.appService.fullscreenImageUrl$.subscribe(fullscreenImageUrl => {
      this.fullscreenImageUrl = fullscreenImageUrl;
    });
  }

  closeFullScreen() {
    this.appService.setIsFullScreen(false);
    this.appService.setFullscreenImageUrl('');
    document.body.classList.remove('hide');
  }
  
}
