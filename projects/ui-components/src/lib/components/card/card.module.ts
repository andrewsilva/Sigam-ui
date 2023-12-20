import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [CardComponent]
})
export class SigamCardModule { }
