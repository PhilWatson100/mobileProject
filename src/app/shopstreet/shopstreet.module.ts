import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopstreetPageRoutingModule } from './shopstreet-routing.module';

import { ShopstreetPage } from './shopstreet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopstreetPageRoutingModule
  ],
  declarations: [ShopstreetPage]
})
export class ShopstreetPageModule {}
