import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CategoryItem, DATA, DataItem } from '../../data';
import { Observable, Subscription, last } from 'rxjs';
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
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) activeCategory: string = '';
  @Input({ required: true }) nav: string[] = [];
  @Input({ required: true }) categoryItems: CategoryItem[] = [];

  public groups = DATA;
  private autoSlideInterval: any;

  activeTab: number = 0;
  paginationTabs: number[] = [0, 1, 2, 3, 4];

  clickedSlideIndex: number = 3;

  ngOnInit(): void {
    // this.getCurrentCategoryItems();
    // this.startAutoSlide(false);
    // this.startAutoSlide(true);
    // this.slideClick(0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges: ', changes['categoryItems'].currentValue);
    console.log('carousel get new items ----------');

    clearInterval(this.autoSlideInterval);

    // this.categoryItems = changes['categoryItems'].currentValue;
    console.log(this.categoryItems);

    // this.clickedSlideIndex = 3;

    this.startAutoSlide(false);
    this.startAutoSlide(true);

    this.slideClick(0);
    console.log(this.categoryItems[2]);

    this.activeTab = 0;

    if (this.categoryItems[2].id === 2) {
      console.log('2');
      this.slideClick(1, true);
    }
    if (this.categoryItems[2].id === 3) {
      console.log('3');

      this.slideClick(0, true);
    }
    if (this.categoryItems[2].id === 4) {
      console.log('4');

      this.slideClick(4, true);
    }
    if (this.categoryItems[2].id === 5) {
      console.log('5');
      this.slideClick(3, true);
    }
  }

  getHeight(i: number) {
    if (i === 0 || i == 4) return '277px';
    else if (i === 1 || i == 3) return '357px';
    return '437px';
  }

  goLeft(fromPagination: boolean) {
    if (fromPagination) return;

    if (this.activeTab <= 3) this.activeTab++;
    else this.activeTab = 0;
  }
  goRight(fromPagination: boolean) {
    if (fromPagination) return;
    if (this.activeTab >= 1) this.activeTab--;
    else this.activeTab = 4;
  }

  slideClick(clickedSlideIndex: number, fromPagination: boolean = false) {
    console.log('slide clicked', clickedSlideIndex);

    const showFirstSlide = () => {
      // go 2 step to right
      const lastTwoItems = this.categoryItems.splice(
        this.categoryItems.length - 2,
        2
      );
      this.categoryItems.unshift(...lastTwoItems);

      this.goRight(fromPagination);
      this.goRight(fromPagination);
    };
    const showSecondSlide = () => {
      // go 1 step to right
      const lastItem = this.categoryItems.pop();
      if (lastItem) this.categoryItems.unshift(lastItem);

      this.goRight(fromPagination);
    };
    const showForthSlide = () => {
      // go 1 step to left
      const firstItem = this.categoryItems.shift();
      if (firstItem) this.categoryItems.push(firstItem);
      this.goLeft(fromPagination);
    };
    const showFifthSlide = () => {
      const firstTwoItems = this.categoryItems.splice(0, 2);
      this.categoryItems.push(...firstTwoItems);
      this.goLeft(fromPagination);
      this.goLeft(fromPagination);
    };

    if (fromPagination) {
      console.log('from pagination: ', clickedSlideIndex);

      // this.activeTab = clickedSlideIndex;

      // console.log(this.categoryItems);

      // if(clickedSlideIndex===0)
    }

    // this.activeTab = clickedSlideIndex;

    if (clickedSlideIndex === 0) showFirstSlide();

    if (clickedSlideIndex === 1) showSecondSlide();

    if (clickedSlideIndex === 3) showForthSlide();

    if (clickedSlideIndex === 4) showFifthSlide();
  }

  getCurrentCategoryItems() {
    // console.log(this.categoryItems);
  }

  startAutoSlide(allow: boolean) {
    // return;
    // console.log('start interval');

    if (allow) {
      this.autoSlideInterval = setInterval(() => {
        // this.clickedSlideIndex++;
        // if (this.clickedSlideIndex <= 4) this.clickedSlideIndex++;
        // else this.clickedSlideIndex = 0;

        this.slideClick(3);
        console.log('next: ', this.activeTab);

        // console.log(this.categoryItems);

        // this.goLeft();
      }, 3000);
    } else {
      // console.log('stop interval');

      clearInterval(this.autoSlideInterval);
    }
  }

  ngOnDestroy() {}
}
