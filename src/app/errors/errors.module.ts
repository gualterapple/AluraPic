import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';


import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/global-error.component';

@NgModule({
  declarations: [NotFoundComponent, GlobalErrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }]
})
export class ErrorsModule { }
