import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown.component';



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
  ],
  exports: [DropdownComponent]
})
export class SigamDropdownModule { }
