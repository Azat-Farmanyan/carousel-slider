import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CategoryItem, DATA, DataItem } from '../../data';
import { last } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

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

  slideClick(clickedSlideIndex: number) {
    const firstElem = this.categoryItems[0];
    const secondElem = this.categoryItems[4];
    const forthElem = this.categoryItems[0];
    const fifthElem = this.categoryItems[4];
    console.log(clickedSlideIndex);

    if (clickedSlideIndex === 1) {
      const lastItem = this.categoryItems.pop();
      if (lastItem) this.categoryItems.unshift(lastItem);
    }

    if (clickedSlideIndex === 0) {
      const lastTwoItems = this.categoryItems.splice(
        this.categoryItems.length - 2,
        2
      ); // Remove the last two items
      this.categoryItems.unshift(...lastTwoItems); // Add them to the beginning
    }
    if (clickedSlideIndex === 3) {
      const firstItem = this.categoryItems.shift(); // Remove the first item
      if (firstItem) this.categoryItems.push(firstItem);
    }

    if (clickedSlideIndex === 4) {
      const firstTwoItems = this.categoryItems.splice(0, 2); // Remove the first two items
      this.categoryItems.push(...firstTwoItems); // Add them to the end
    }
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
