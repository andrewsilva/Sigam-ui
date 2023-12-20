import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sigam-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent {
  @Input() options: any[] = []; // As opções para o multiselect
  @Input() optionLabel?: string; // O campo a ser usado como label

  @Output() selectionChange = new EventEmitter<any[]>(); // Emitido quando a seleção muda

  ngOnInit() {
    console.log('option', this.options)
    console.log('optionlabe', this.optionLabel)
  }

  selectedValues: any[] = []; // Os valores selecionados internamente

  // Quando a seleção muda, emite o evento de mudança
  onSelectionChange(event: any) {
    console.log('Selection Changed:', this.selectedValues);
    this.selectionChange.emit(this.selectedValues);
  }

}
