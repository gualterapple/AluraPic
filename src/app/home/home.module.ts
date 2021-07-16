import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SignUpComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SigninComponent, SignUpComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}
