import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button.component';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [ButtonComponent],
  exports:[ButtonComponent]
})
export class SigamButtonModule { }
