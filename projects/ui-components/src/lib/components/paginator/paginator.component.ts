import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sigam-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() first: number = 0;
  @Input() rows: number = 10;
  @Input() totalRecords: number = 0;
  @Input() rowsPerPageOptions: number[] = [10, 20, 30];

  @Output() pageChange = new EventEmitter<any>();

  emitPageChange(event: any) {
    this.pageChange.emit(event);
  }

}
