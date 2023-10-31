import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicabilityComponent } from './applicability.component';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from './components/carousel/carousel.module';

@NgModule({
  declarations: [ApplicabilityComponent, NavComponent],
  imports: [CommonModule, CarouselModule],
})
export class ApplicabilityModule {}
