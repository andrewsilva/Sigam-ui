import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { PaginatorComponent } from './paginator.component';



@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    PaginatorModule
  ],
  exports: [PaginatorComponent]
})
export class SigamPaginatorModule { }
