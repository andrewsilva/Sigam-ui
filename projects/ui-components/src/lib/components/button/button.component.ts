import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sigam-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string = '';
  @Input() iconPos: string = 'left';
  @Input() icon: string | null = null;
  @Input() badge: string | null = null;
  @Input() label?: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() loadingIcon: string | null = null;
  @Input() raised: boolean = false;
  @Input() rounded: boolean = false;
  @Input() text: boolean = false;
  @Input() plain: boolean = false;
  @Input() severity: string | null = null;
  @Input() outlined: boolean = false;
  @Input() link: boolean = false;
  @Input() size?: 'small' | 'large';
  @Input() style: any | null = null;
  @Input() styleClass: string  = '';
  @Input() badgeClass: string | null = null;
  @Input() ariaLabel: string | null = null;

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
