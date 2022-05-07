import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointOfInterestsPage } from './point-of-interests.page';

const routes: Routes = [
  {
    path: '',
    component: PointOfInterestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointOfInterestsPageRoutingModule {}
