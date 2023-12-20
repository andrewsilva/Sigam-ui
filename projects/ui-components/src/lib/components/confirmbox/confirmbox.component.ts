import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'sigam-confirmbox',
  templateUrl: './confirmbox.component.html',
  styleUrls: ['./confirmbox.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ConfirmboxComponent {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm1() {
    this.confirmationService.confirm({
      message: 'Confirmar acao ?',
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirm', detail:'Voce aceitou'});
      }
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Tens certeza da delecao ?',
      header: 'Confirmacao de Delete',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirm', detail:'Dado Deletado!'});
      },
      reject: () => {
        this.messageService.add({severity:'info', summary:'Reject', detail:'Voce Negou'});
      }
    });
  }

}
