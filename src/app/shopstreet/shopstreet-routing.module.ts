import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopstreetPage } from './shopstreet.page';

const routes: Routes = [
  {
    path: '',
    component: ShopstreetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopstreetPageRoutingModule {}
