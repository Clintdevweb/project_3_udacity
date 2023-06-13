import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { CardStoreModule } from '../card/card.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    CardStoreModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    DropdownModule,
    ButtonModule,
    ToastModule
  ],
  providers:[MessageService],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
