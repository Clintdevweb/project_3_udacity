import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProductListModule } from 'src/app/components/product-list/product-list.module';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailModule } from './components/product-detail/product-detail.module';
import { CartStoreModule } from './components/cart/cart.module';
import { InfoOrderModule } from './components/infoOrder/infoOrder.module';
import { CartItemModule } from './components/cart/cart-item/cart-item.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    TabMenuModule,
    ProductListModule,
    CartStoreModule,
    DropdownModule,
    HttpClientModule,
    ProductDetailModule,
    InfoOrderModule,
    CartItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
