import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sigam-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements ControlValueAccessor {
  @Input() dateFormat: string = 'dd/mm/yy'; // Formato da data
  // Você pode adicionar mais propriedades @Input conforme necessário

  @Output() dateChange = new EventEmitter<Date>(); // Emitido quando a data muda

  dateValue?: Date; // O valor da data internamente

  // ControlValueAccessor methods
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: Date): void {
    this.dateValue = value;
    this.onChange(value);
    this.onTouch(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onDateChange(event: any): void {
    this.dateChange.emit(this.dateValue);
  }
}
