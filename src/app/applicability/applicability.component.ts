import { Component, OnInit } from '@angular/core';
import { CategoryItem, DATA, DataItem } from './data';

@Component({
  selector: 'app-applicability',
  templateUrl: './applicability.component.html',
  styleUrls: ['./applicability.component.scss'],
})
export class ApplicabilityComponent implements OnInit {
  public groups = DATA;
  currentCategoryItems: CategoryItem[] = [];

  activeCategory: string = this.groups[0].title;

  ngOnInit(): void {
    this.setCategory(this.activeCategory);
  }

  setCategory(groupName: string) {
    console.log('set category: ', groupName);

    this.activeCategory = groupName;
    this.currentCategoryItems = this.groups.filter(
      (el) => el.title === this.activeCategory
    )[0].items;
  }

  get activeBackground() {
    return '';
  }
}
