import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comment/photo-comment.component";
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule
({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent],

  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent],

  imports: [
  CommonModule,
    PhotoModule,
  RouterModule]
})


export class PhotoDetailsModule
{

 }
