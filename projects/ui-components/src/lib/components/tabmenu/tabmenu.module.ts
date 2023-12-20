import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabmenuComponent } from './tabmenu.component';



@NgModule({
  declarations: [TabmenuComponent],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [TabmenuComponent]
})
export class SigamTabmenuModule { }
