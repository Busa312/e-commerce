import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsModule} from "./features/products/products.module";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => ProductsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
