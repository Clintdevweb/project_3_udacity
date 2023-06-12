import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { CardStoreModule } from '../card/card.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    CardStoreModule
  ],
  exports:[ProductListComponent],
  declarations: [ProductListComponent]
})
export class ProductListModule { }
