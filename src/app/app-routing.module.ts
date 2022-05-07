import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'connaught',
    loadChildren: () => import('./connaught/connaught.module').then( m => m.ConnaughtPageModule)
  },
  {
    path: 'shopstreet',
    loadChildren: () => import('./shopstreet/shopstreet.module').then( m => m.ShopstreetPageModule)
  },
  {
    path: 'point-of-interests',
    loadChildren: () => import('./point-of-interests/point-of-interests.module').then( m => m.PointOfInterestsPageModule)
  },
  {
    path: 'resturants-cafe',
    loadChildren: () => import('./resturants-cafe/resturants-cafe.module').then( m => m.ResturantsCafePageModule)
  },
  {
    path: 'bnb',
    loadChildren: () => import('./bnb/bnb.module').then( m => m.BNBPageModule)
  },
  {
    path: 'walks',
    loadChildren: () => import('./walks/walks.module').then( m => m.WalksPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
