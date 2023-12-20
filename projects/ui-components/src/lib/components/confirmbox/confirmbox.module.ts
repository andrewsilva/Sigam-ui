import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmboxComponent } from './confirmbox.component';



@NgModule({
  declarations: [ConfirmboxComponent],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
  ],
  exports: [ConfirmboxComponent]
})
export class SigamConfirmboxModule { }
