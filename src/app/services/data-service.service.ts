import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Item } from '../models/item/item.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cartSubject$: BehaviorSubject<Item[]> = new BehaviorSubject(<Item[]>[]);
  formValue: BehaviorSubject<any> = new BehaviorSubject({})
  constructor(private http: HttpClient) {}

  getProductList(): Observable<any[]> {
    return this.http.get<[]>('./assets/data.json').pipe(
      map((res) => {
        return res || [];
      })
    );
  }

  checkItemExist(cart: Item[], item: Item) {
    let index = cart.findIndex((itemCard) => itemCard.id === item.id);
    if (index !== -1) {
      cart[index].quantity = item.quantity;
    } else {
      cart.push(item);
    }
  }
}
