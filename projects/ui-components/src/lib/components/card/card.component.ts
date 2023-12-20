import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sigam-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() footer?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
