import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { CategoryItem } from 'src/app/applicability/data';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CarouselItemComponent {
  @Input({ required: true }) slideContent: CategoryItem;

  @Input({ required: true }) height: string = '437px';
}
