import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckboxComponent } from './checkbox.component';



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule
  ],
  exports: [CheckboxComponent]
})
export class SigamCheckboxModule { }
