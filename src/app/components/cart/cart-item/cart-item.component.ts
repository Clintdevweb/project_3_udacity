import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item/item.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: Item = {};
  @Output() onChangeItem = new EventEmitter()
  @Output() onRemoveItem = new EventEmitter()
  quantity: any;

  constructor() { }

  ngOnInit() {
  }

  onChangeQuantity(item: Item) {
    this.onChangeItem.emit(item)
  }

  removeItemCart(item: Item) {
    this.onRemoveItem.emit(item)
  }

}
