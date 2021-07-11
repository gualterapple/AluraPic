import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { HttpClientModule } from '@angular/common/http';
import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [PhotoComponent],
  imports: [CommonModule, HttpClientModule, DarkenOnHoverModule],

exports: [PhotoComponent]
})
export class PhotoModule {}
