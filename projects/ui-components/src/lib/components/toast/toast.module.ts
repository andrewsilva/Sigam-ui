import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ToastComponent } from './toast.component';


@NgModule({
  imports: [
    CommonModule,
    ToastModule
  ],
  declarations: [ToastComponent],
  exports: [ToastComponent]
})
export class SigamToastModule { }
