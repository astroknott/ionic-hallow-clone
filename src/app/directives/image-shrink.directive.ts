import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appImageShrink]'
})
export class ImageShrinkDirective {
  @Input('appImageShrink') cover: any;
  
  constructor(private renderer: Renderer2, private domCtrl: DomController) { }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;

    let backgroundSize = Math.max(120 - Math.round(scrollTop/4), 100);

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.cover, 'background-size', `auto ${backgroundSize}%`);
    })
  }
  
}
