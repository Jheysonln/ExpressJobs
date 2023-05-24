import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions ,Autoplay,Thumbs, Swiper} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay,Thumbs]);


@Component({
  selector: 'app-swiper-carousel',
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.scss']
})
export class SwiperCarouselComponent implements OnInit{

  @Input() imagen!: string;
  @Input() descripcion!: string;
  @Input() nombre!: string;

  imagen1: string = '../../../../assets/ichigo_ulquiorra.jpg';
  imagen2: string = '../../../../assets/aizen.jpg';
  imagen3: string = '../../../../assets/naruto_sasuke.jpg';
  imagen4: string = '../../../../assets/ichigo_ulquiorra.jpg';
  imagen5: string = '../../../../assets/aizen.jpg';
  imagen6: string = '../../../../assets/naruto_sasuke.jpg';
  imagen7: string = '../../../../assets/naruto_sasuke.jpg';
  imagen8: string = '../../../../assets/naruto_sasuke.jpg';

  config!: SwiperOptions;
  slides! : any[];


  thumbsSwiper: any;



  
  ngOnInit(): void {
    this.config = {
      speed:1000,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        enabled:true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        enabled:true,
        clickable: true,
        type:'bullets'
      },
      scrollbar: { draggable: true },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter:true
      },
      centeredSlides:true,
    }

    this.slides = [
      {
        link: 'https://www.google.com',
        image: this.imagen1,
        thumb: this.imagen1, alt: 'Slide 1'

      },
      {
        link: 'https://www.youtube.com',
        image: this.imagen2,
        thumb: this.imagen2, alt: 'Slide 2'
      },
      {
        link: 'https://www.youtube.com',
        image: this.imagen3,
        thumb: this.imagen3, alt: 'Slide 3'
      },
      {
        link: 'https://www.youtube.com',
        image: this.imagen4,
        thumb: this.imagen4, alt: 'Slide 4'
      },
      {
        link: 'https://www.youtube.com',
        image: this.imagen5,
        thumb: this.imagen5, alt: 'Slide 5'
      },
      {
        link: 'https://www.youtube.com',
        image: this.imagen6,
        thumb: this.imagen6, alt: 'Slide 6'
      },
      {
        link: 'https://www.youtube.com',
        image: this.imagen7,
        thumb: this.imagen7, alt: 'Slide 7'
      },
      {
        link: 'https://www.youtube.com',
        image: this.imagen8,
        thumb: this.imagen8, alt: 'Slide 8'
      }
    ];
  }






  
  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;

  onImageClick(event:any) {
    const target = event.target || event.srcElement || event.currentTarget;
    const imgSrc = target.getAttribute('src');

    // Fullscreen mode
    if (this.carouselContainer.nativeElement.requestFullscreen) {
      this.carouselContainer.nativeElement.requestFullscreen();
    } else if (this.carouselContainer.nativeElement.msRequestFullscreen) {
      this.carouselContainer.nativeElement.msRequestFullscreen();
    } else if (this.carouselContainer.nativeElement.mozRequestFullScreen) {
      this.carouselContainer.nativeElement.mozRequestFullScreen();
    } else if (this.carouselContainer.nativeElement.webkitRequestFullscreen) {
      this.carouselContainer.nativeElement.webkitRequestFullscreen();
    }
  }

}
