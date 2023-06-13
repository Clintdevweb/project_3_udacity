import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item/item.models';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  listItem: Item[] = [];
  cart: Item[] = []
  item: Item = {}
  id: any;
  quantity: any;
  quantities: SelectItem[] = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '9', value: 9},
    {label: '10', value: 10},
  ]
  subcriptions: Subscription[] = []

  constructor(private routeActive: ActivatedRoute,
    private dataService: DataService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.id = this.routeActive.snapshot.paramMap.get('id');
    this.subcriptions.push(
      this.dataService.getProductList().subscribe((productList: Item[]) => {
        this.listItem = productList;
        this.listItem.forEach((item: Item) => {
          if (item.id === this.id) {
            this.item = item;
            return;
          }
        });
      })
    );

    this.subcriptions.push(
      this.dataService.cartSubject$.subscribe((cart: Item[]) => {
        this.cart = cart;
      })
    );
  }

  addToCart(item: any, quantity: number) {
    let itemAddtoCart = {...item, quantity: quantity}
    this.dataService.checkItemExist(this.cart, itemAddtoCart)
    this.dataService.cartSubject$.next(this.cart)
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Add product to cart success'})
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy() {
    this.subcriptions.forEach((subcription) => {
      subcription.unsubscribe()
    })
  }
}
