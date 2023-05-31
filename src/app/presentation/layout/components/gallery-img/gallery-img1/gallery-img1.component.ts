import { Component, ElementRef } from '@angular/core';
import { AppService } from 'src/app/data/services/app.service';

@Component({
  selector: 'app-gallery-img1',
  templateUrl: './gallery-img1.component.html',
  styleUrls: ['./gallery-img1.component.scss']
})
export class GalleryImg1Component {
  isFullScreen: boolean = false;
  fullscreenImageUrl: string = '';
  urls: any[] = [];
  maxImages: number = 5; // Número máximo de imágenes permitidas
  showAddButton: boolean = true; // Variable para controlar la visibilidad del botón "Agregar imagen"
  
  constructor(private appService: AppService) {}

  onSelectFile(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const files = event.target.files;
      const filesAmount = Math.min(files.length, this.maxImages - this.urls.length); // Verificar el límite de imágenes

      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
  
        reader.onload = (event: Event) => {
          const target = event.target as FileReader;
          console.log(target.result);
          this.urls.push(target.result);
        }
  
        reader.readAsDataURL(files[i]);
      }
      
      if (this.urls.length >= this.maxImages) {
        this.showAddButton = false; // Ocultar el botón "Agregar imagen" cuando se alcanza el límite
      }
    }
  }

  removeImage(url: string) {
    const index = this.urls.indexOf(url);
    if (index !== -1) {
      this.urls.splice(index, 1);
      this.showAddButton = true; // Mostrar el botón "Agregar imagen" al eliminar una imagen
    }
  }
  
  openFullScreen(url: string) {
    this.appService.setIsFullScreen(true);
    this.appService.setFullscreenImageUrl(url);
    document.body.classList.add('hide');
  }
}