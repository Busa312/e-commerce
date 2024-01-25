import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }


export const API_URL = 'https://api.escuelajs.co/api/v1/';
