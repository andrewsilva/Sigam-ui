import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastPositionType } from 'primeng/toast';

@Component({
  selector: 'sigam-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers: [MessageService]
})
export class ToastComponent {
  @Input() position?: ToastPositionType = 'top-center';
  @Input() message?: { severity: string, summary: string, detail: string };

  constructor(private messageService: MessageService) {}

  showToast() {
    if (this.message) {
      this.messageService.add({
        key: 'custom',
        severity: this.message.severity,
        summary: this.message.summary,
        detail: this.message.detail
      });
    }
  }
}
