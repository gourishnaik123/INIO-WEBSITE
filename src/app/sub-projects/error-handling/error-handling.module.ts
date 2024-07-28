import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingComponent } from './error-handling.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ErrorHandlingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ErrorHandlingComponent }
    ])
  ]
})
export class ErrorHandlingModule { }
