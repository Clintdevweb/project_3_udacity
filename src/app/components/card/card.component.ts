import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { Item } from 'src/app/models/item/item.models';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: any;
  quantities: SelectItem[] = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6}
  ]

  quantity: number = 1
  listCart: Item[] = []
  constructor(private router: Router,
  private  dataService: DataService, private messageService: MessageService) { }

  ngOnInit() {
    this.dataService.cartSubject$.subscribe((cart) => {
      this.listCart = cart
    })

  }

  addToCart(item: any, quantity: number) {

    let itemAddtoCart = {...item, quantity: quantity}
    this.dataService.checkItemExist(this.listCart, itemAddtoCart)
    this.dataService.cartSubject$.next(this.listCart)
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Add '})
  }

  showProductDetail(id: string) {
    this.router.navigate(['product-items', id])
  }
}
