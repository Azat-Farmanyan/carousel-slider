import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicabilityComponent } from './applicability/applicability.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'applicability' },
  { path: 'applicability', component: ApplicabilityComponent },
  { path: '**', component: ApplicabilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
