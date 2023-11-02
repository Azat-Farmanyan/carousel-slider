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
  group,
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
  activeTab: number = 2;
  paginationTabs: number[] = [0, 1, 2, 3, 4];
  private autoSlideInterval: any;
  clickedSlideIndex: number = 3;

  ngOnInit(): void {
    this.getCurrentCategoryItems();
    // this.startAutoSlide(false);
    // this.startAutoSlide(true);
    // this.slideClick(0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.clickedSlideIndex = 3;
    this.activeTab = 2;
    this.startAutoSlide(false);
    this.startAutoSlide(true);

    // this.slideClick(0);
    // console.log(this.getCurrentItemsIndex(this.activeCategory));
  }

  getHeight(i: number) {
    if (i === 0 || i == 4) return '277px';
    else if (i === 1 || i == 3) return '357px';
    return '437px';
  }
  goLeft() {
    if (this.activeTab <= 3) this.activeTab++;
    else this.activeTab = 0;
  }
  goRight() {
    if (this.activeTab >= 1) this.activeTab--;
    else this.activeTab = 4;
  }
  slideClick(clickedSlideIndex: number) {
    console.log('slide clicked', clickedSlideIndex);

    // this.activeTab = clickedSlideIndex;

    if (clickedSlideIndex === 1) {
      // go 1 step to right
      const lastItem = this.categoryItems.pop();
      if (lastItem) this.categoryItems.unshift(lastItem);
      this.goRight();
    }

    if (clickedSlideIndex === 0) {
      // go 2 step to right
      const lastTwoItems = this.categoryItems.splice(
        this.categoryItems.length - 2,
        2
      );
      this.categoryItems.unshift(...lastTwoItems);

      this.goRight();
      this.goRight();
    }
    if (clickedSlideIndex === 3) {
      // go 1 step to left
      const firstItem = this.categoryItems.shift();
      if (firstItem) this.categoryItems.push(firstItem);
      this.goLeft();
    }

    if (clickedSlideIndex === 4) {
      const firstTwoItems = this.categoryItems.splice(0, 2);
      this.categoryItems.push(...firstTwoItems);
      this.goLeft();
      this.goLeft();
    }

    // console.log(
    //   'getThirdItemIndex: ',
    //   this.getThirdItemIndex(this.categoryItems[2])
    // );
  }

  getThirdItemIndex(thirdItem: CategoryItem) {
    console.log(this.activeCategory);

    const activeItems = this.groups.filter(
      (group) => group.title === this.activeCategory
    );
    console.log('activeItems: ', activeItems[0].items);

    return activeItems[0].items.indexOf(thirdItem);
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

  startAutoSlide(allow: boolean) {
    if (allow) {
      console.log('start interval');

      this.autoSlideInterval = setInterval(() => {
        // this.clickedSlideIndex++;
        // if (this.clickedSlideIndex <= 4) this.clickedSlideIndex++;
        // else this.clickedSlideIndex = 0;

        this.slideClick(3);
        // this.goLeft();
      }, 3000);
    } else {
      console.log('stop interval');

      clearInterval(this.autoSlideInterval);
    }
  }
}
