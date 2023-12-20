import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigamButtonModule } from '../../../ui-components/src/lib/components/button/button.module';
import { SigamCalendarModule } from '../../../ui-components/src/lib/components/calendar/calendar.module';
import { SigamCardModule } from '../../../ui-components/src/lib/components/card/card.module';
import { SigamCheckboxModule } from '../../../ui-components/src/lib/components/checkbox/checkbox.module';
import { SigamConfirmboxModule } from '../../../ui-components/src/lib/components/confirmbox/confirmbox.module';
import { SigamDropdownModule } from '../../../ui-components/src/lib/components/dropdown/dropdown.module';
import { SigamMultiselectModule } from '../../../ui-components/src/lib/components/multiselect/multiselect.module';
import { SigamNavModule } from '../../../ui-components/src/lib/components/nav/nav.module';
import { SigamPaginatorModule } from '../../../ui-components/src/lib/components/paginator/paginator.module';
import { SigamTableModule } from '../../../ui-components/src/lib/components/table/table.module';
import { SigamTabmenuModule } from '../../../ui-components/src/lib/components/tabmenu/tabmenu.module';
import { SigamToastModule } from '../../../ui-components/src/lib/components/toast/toast.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SigamButtonModule,
    SigamDropdownModule,
    SigamButtonModule,
    SigamCardModule,
    SigamNavModule,
    SigamCheckboxModule,
     SigamDropdownModule,
     SigamPaginatorModule,
    SigamConfirmboxModule,
    SigamTabmenuModule,
    SigamTableModule,
    SigamMultiselectModule,
    SigamCalendarModule,
    SigamToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
