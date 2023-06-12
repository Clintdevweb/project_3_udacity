import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { CardStoreModule } from '../card/card.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CardStoreModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    DropdownModule,
    ButtonModule
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
