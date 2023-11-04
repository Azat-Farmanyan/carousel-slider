import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CategoryItem, DATA } from './data';
import { OnChanges } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-applicability',
  templateUrl: './applicability.component.html',
  styleUrls: ['./applicability.component.scss'],
  animations: [
    trigger('backgroundFade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('0.5s')]),
    ]),
  ],
})
export class ApplicabilityComponent implements OnInit, AfterContentChecked {
  public groups = DATA;
  nav: string[] = [];
  categoryItems: CategoryItem[] = [];
  activeBackground: string =
    "'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(' + '../../assets/images/bg/bg-1.jpeg' + ') lightgray 50% / cover no-repeat'";
  activeCategory: string = this.groups[0].title;

  constructor(
    private cdref: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    this.groups.forEach((el) => {
      // console.log(el.items);
      // this.categoryItems = this.categoryItems.concat(el.items);
      this.nav.push(el.title);
    });
    this.setCategory(this.activeCategory);

    // console.log(this.categoryItems);
    // console.log(this.nav);
  }

  setCategory(groupName: string) {
    // console.log('set category: ', groupName);
    // this.setCategoryEvent();

    this.activeCategory = groupName;
    this.categoryItems = this.groups.filter(
      (el) => el.title === this.activeCategory
    )[0].items;

    // console.log('setCategory: ', this.categoryItems);

    // this.groups.forEach((el) => {
    //   console.log(el.items);
    //   this.categoryItems = this.categoryItems.concat(el.items);
    // });

    // console.log(this.categoryItems);
  }

  getActiveSlide(slide: CategoryItem) {
    console.log('get new background', slide);
    // return;
    const bg = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(' + '../../assets/images/bg/${slide.bgUrl}' + ') lightgray 50% / cover no-repeat`;

    this.activeBackground = slide.bgUrl;

    console.log(this.activeBackground);
  }
}
