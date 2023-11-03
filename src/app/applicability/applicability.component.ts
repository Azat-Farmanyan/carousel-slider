import { Component, OnInit } from '@angular/core';
import { CategoryItem, DATA } from './data';

@Component({
  selector: 'app-applicability',
  templateUrl: './applicability.component.html',
  styleUrls: ['./applicability.component.scss'],
})
export class ApplicabilityComponent implements OnInit {
  public groups = DATA;
  nav: string[] = [];
  categoryItems: CategoryItem[] = [];
  activeBackground: string =
    "'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(' + '../../assets/images/bg/bg-1.jpeg' + ') lightgray 50% / cover no-repeat'";
  activeCategory: string = this.groups[0].title;

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

  getActiveBackground(bgUrl: string = 'bg-1.jpeg'): string {
    console.log(bgUrl);
    bgUrl;
    return `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(' + '../../assets/images/bg/${bgUrl}' + ') lightgray 50% / cover no-repeat`;
  }

  getActiveSlide(slide: CategoryItem) {
    this.activeBackground = this.getActiveBackground(slide.bgUrl);
  }
}
