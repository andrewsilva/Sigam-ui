import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiselectComponent } from './multiselect.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectModule
  ],
  declarations: [MultiselectComponent],
  exports: [MultiselectComponent]
})

export class SigamMultiselectModule { }
