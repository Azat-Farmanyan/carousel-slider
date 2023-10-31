import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) isActive: boolean = false;

  @Output() onClick = new EventEmitter<string>();

  setActive() {}
}
