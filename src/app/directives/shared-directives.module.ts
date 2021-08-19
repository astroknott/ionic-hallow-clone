import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShrinkDirective } from './image-shrink.directive';



@NgModule({
  declarations: [
    ImageShrinkDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ImageShrinkDirective]
})
export class SharedDirectivesModule { }
