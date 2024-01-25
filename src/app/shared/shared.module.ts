import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }


export const API_URL = 'https://api.escuelajs.co/api/v1/';
