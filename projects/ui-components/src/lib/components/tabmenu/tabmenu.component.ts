import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';

@Component({
  selector: 'sigam-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent extends TabMenu {
  @Input() items: MenuItem[] = [];
  @Input() defaultActiveItem?: MenuItem;

  @Output() override activeItemChange = new EventEmitter<MenuItem>();

  onActiveItemChange(event: any) {
    // Certifique-se de extrair o valor correto do evento
    const activeItem = event.value; // ou event.item, dependendo de como o PrimeNG emite o evento
    this.activeItemChange.emit(activeItem);
  }

}
