import { Component, OnInit } from '@angular/core';
import { CategoryItem, DATA, DataItem } from './data';

@Component({
  selector: 'app-applicability',
  templateUrl: './applicability.component.html',
  styleUrls: ['./applicability.component.scss'],
})
export class ApplicabilityComponent implements OnInit {
  public groups = DATA;
  nav: string[] = [];
  categoryItems: CategoryItem[] = [];

  activeCategory: string = this.groups[0].title;

  ngOnInit(): void {
    this.setCategory(this.activeCategory);
    this.groups.forEach((el) => {
      // console.log(el.items);
      // this.categoryItems = this.categoryItems.concat(el.items);
      this.nav.push(el.title);
    });

    // console.log(this.categoryItems);
    // console.log(this.nav);
  }

  setCategory(groupName: string) {
    console.log('set category: ', groupName);

    this.activeCategory = groupName;
    this.categoryItems = this.groups.filter(
      (el) => el.title === this.activeCategory
    )[0].items;

    // this.groups.forEach((el) => {
    //   console.log(el.items);
    //   this.categoryItems = this.categoryItems.concat(el.items);
    // });

    // console.log(this.categoryItems);
  }

  get activeBackground() {
    return '';
  }
}
