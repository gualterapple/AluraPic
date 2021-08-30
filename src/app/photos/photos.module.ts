import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
declarations: [],
imports : [
  HttpClientModule,
  CommonModule,
  PhotoFormModule,
  PhotoModule,
  PhotoListModule,
  PhotoDetailsModule
 ]
})
export class PhotosModule {}
