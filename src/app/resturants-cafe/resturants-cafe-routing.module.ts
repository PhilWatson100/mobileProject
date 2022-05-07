import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantsCafePage } from './resturants-cafe.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantsCafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantsCafePageRoutingModule {}
