import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CartItemModule } from './cart-item/cart-item.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CartItemModule,
    ToastModule
  ],
  providers: [MessageService],
  exports: [CartComponent],
})
export class CartStoreModule {}
