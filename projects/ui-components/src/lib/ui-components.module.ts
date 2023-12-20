import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigamButtonModule } from './components/button/button.module';
import { SigamCalendarModule } from './components/calendar/calendar.module';
import { SigamCardModule } from './components/card/card.module';
import { SigamCheckboxModule } from './components/checkbox/checkbox.module';
import { SigamConfirmboxModule } from './components/confirmbox/confirmbox.module';
import { SigamDropdownModule } from './components/dropdown/dropdown.module';
import { SigamMultiselectModule } from './components/multiselect/multiselect.module';
import { SigamNavModule } from './components/nav/nav.module';
import { SigamPaginatorModule } from './components/paginator/paginator.module';
import { SigamTableModule } from './components/table/table.module';
import { SigamTabmenuModule } from './components/tabmenu/tabmenu.module';
import { SigamToastModule } from './components/toast/toast.module';

@NgModule({
  imports: [
    CommonModule,
    SigamButtonModule,
    SigamCalendarModule,
    SigamCardModule,
    SigamCheckboxModule,
    SigamConfirmboxModule,
    SigamDropdownModule,
    SigamMultiselectModule,
    SigamNavModule,
    SigamPaginatorModule,
    SigamTableModule,
    SigamTabmenuModule,
    SigamToastModule,
  ],
  declarations: [],
  exports: [
    SigamButtonModule,
    SigamCalendarModule,
    SigamCardModule,
    SigamCheckboxModule,
    SigamConfirmboxModule,
    SigamDropdownModule,
    SigamMultiselectModule,
    SigamNavModule,
    SigamPaginatorModule,
    SigamTableModule,
    SigamTabmenuModule,
    SigamToastModule,
  ],
})
export class UiComponentsModule {}
