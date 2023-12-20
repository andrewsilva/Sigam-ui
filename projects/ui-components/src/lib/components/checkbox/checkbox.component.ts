import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sigam-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Input() label?: string;
  @Input() value: any;
  @Input() inputId?: string;
  @Input() checked?: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  handleChange(event: any) {
    this.checkedChange.emit(event.checked);
  }

}
