import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointOfInterestsPageRoutingModule } from './point-of-interests-routing.module';

import { PointOfInterestsPage } from './point-of-interests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointOfInterestsPageRoutingModule
  ],
  declarations: [PointOfInterestsPage]
})
export class PointOfInterestsPageModule {}
