import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [CarouselComponent, CarouselItemComponent, PaginationComponent],
  imports: [CommonModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
