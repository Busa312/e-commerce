import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { HomeCardComponent } from './components/home-card/home-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]
})
export class HomepageModule { }
