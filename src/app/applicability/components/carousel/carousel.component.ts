import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CategoryItem, DATA, DataItem } from '../../data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input({ required: true }) activeCategory: string = '';
  @Input({ required: true }) currentCategoryItems: CategoryItem[] = [];
  public groups = DATA;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.activeCategory);
    // console.log(this.currentCategoryItems);
  }
}
