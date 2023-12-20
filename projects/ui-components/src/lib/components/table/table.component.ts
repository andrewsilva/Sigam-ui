import { Component, Input } from '@angular/core';

export interface TableColumn {
  header: string; // O nome a ser exibido no cabeçalho da coluna
  field: string;  // A chave correspondente no objeto de dados
}

@Component({
  selector: 'sigam-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = []; // Os dados da tabela

}
