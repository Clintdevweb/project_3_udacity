import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item/item.models';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  listCart: Item[] = []

  totalPrice: number = 0;
  ngOnInit() {
    this.getCart()
  }

  getCart() {
    this.dataService.cartSubject$.subscribe((cart) => {
      this.listCart = cart
      this.totalPrice = +this.listCart.reduce((total, item:Item) => {
        return total + (Number(item.quantity) * Number(item.price))
      }, 0).toFixed(2)
    })
  }

  handleChangeItem(item: Item) {
    let index = this.listCart.findIndex((itemCard: any) => itemCard.id === item.id);

    if(index !== -1 && item.quantity && item.quantity >= 1) {
      this.listCart[index].quantity = item.quantity
      this.dataService.cartSubject$.next([...this.listCart])
    }else {
      this.totalPrice = 0
    }
  }

  handleRemoveItem(item: Item) {
    let listCartNew = this.listCart.filter((cart) => {
      return cart.id !== item.id
    })

    this.dataService.cartSubject$.next(listCartNew)
  }

  handleSubmit(formValue: any) {
    this.dataService.formValue.next({...formValue, totalPrice: this.totalPrice})
    this.listCart = [];
    this.dataService.cartSubject$.next([])
    this.router.navigate(['/info-order'])
  }
}
