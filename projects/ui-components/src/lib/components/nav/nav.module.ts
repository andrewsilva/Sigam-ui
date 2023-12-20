import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './nav.component';


@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class SigamNavModule { }
