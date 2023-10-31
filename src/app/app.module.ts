import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicabilityModule } from './applicability/applicability.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ApplicabilityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
