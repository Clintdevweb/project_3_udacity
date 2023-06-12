import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoOrderComponent } from './infoOrder.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule
  ],
  declarations: [InfoOrderComponent]
})
export class InfoOrderModule { }
