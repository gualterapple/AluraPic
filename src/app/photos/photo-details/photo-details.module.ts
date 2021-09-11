import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VmessageModule } from 'src/app/shared/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comment/photo-comment.component';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],

  exports: [PhotoDetailsComponent, PhotoCommentsComponent],

  imports: [CommonModule, PhotoModule, RouterModule, FormsModule, ReactiveFormsModule, VmessageModule],
})

export class PhotoDetailsModule {}