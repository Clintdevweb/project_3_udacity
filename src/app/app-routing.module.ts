import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { InfoOrderComponent } from './components/infoOrder/infoOrder.component';

const routes: Routes = [
  { path: 'home', component: ProductListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-items/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'info-order', component: InfoOrderComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
