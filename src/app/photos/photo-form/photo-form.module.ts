import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ImmediateClickModule } from "src/app/shared/directives/imediate-click/imediate-click.module";
import { VmessageModule } from "src/app/shared/vmessage/vmessage.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [
    PhotoFormComponent
  ], imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ]
})
export class PhotoFormModule{}
