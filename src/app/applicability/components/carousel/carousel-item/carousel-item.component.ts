import { Component, Input } from '@angular/core';
import { CategoryItem } from 'src/app/applicability/data';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
  @Input({ required: true }) slideContent: CategoryItem;
}
