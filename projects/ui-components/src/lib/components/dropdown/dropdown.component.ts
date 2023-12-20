import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sigam-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{
  @Input() options?: any[];
  @Input() selectedOption: any;
  @Input() showClear: boolean = true;
  @Input() placeholder: string = 'Select an option';

  @Output() selectedOptionChange = new EventEmitter<any>();

  handleChange(event: any) {
    this.selectedOptionChange.emit(event.value);
  }

}
