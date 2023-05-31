import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImagePreview]'
})
export class ImagePreviewDirective implements OnChanges {
  @Input() appImagePreview: File[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appImagePreview'] && this.appImagePreview.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.el.nativeElement.setAttribute('src', e.target.result);
      };

      const lastFile = this.appImagePreview[this.appImagePreview.length - 1];
      reader.readAsDataURL(lastFile);
    } else {
      this.el.nativeElement.removeAttribute('src');
    }
  }
}