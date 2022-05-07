import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResturantsCafePageRoutingModule } from './resturants-cafe-routing.module';

import { ResturantsCafePage } from './resturants-cafe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResturantsCafePageRoutingModule
  ],
  declarations: [ResturantsCafePage]
})
export class ResturantsCafePageModule {}
