import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class SigamCalendarModule { }
