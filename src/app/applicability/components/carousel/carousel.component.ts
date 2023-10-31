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
  @Input({ required: true }) nav: string[] = [];
  @Input({ required: true }) categoryItems: CategoryItem[] = [];
  public groups = DATA;

  ngOnInit(): void {
    this.getCurrentCategoryItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.getCurrentItemsIndex(this.activeCategory));
  }

  getHeight(i: number) {
    if (i === 0 || i == 4) return '277px';
    else if (i === 1 || i == 3) return '357px';
    return '437px';
  }

  slideClick(event: any) {
    console.log(event);
  }

  getCurrentCategoryItems() {
    console.log(this.categoryItems);
  }

  getCurrentItemsIndex(category: string) {
    const firstSlideIndex = this.nav.indexOf(category);

    if (firstSlideIndex === -1) {
      console.log(`${category} not found in the array`);
      return null; // Or any other value to indicate not found
    }

    const slideCount = 5; // Number of slides in each range
    const lastSlideIndex = firstSlideIndex + slideCount - 1;

    const start = firstSlideIndex * slideCount;
    const end = lastSlideIndex * slideCount;

    return [start, end];
  }
}
