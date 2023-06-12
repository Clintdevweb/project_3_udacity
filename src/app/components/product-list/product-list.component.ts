import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  subcriptions: Subscription[] = []
  productList: any = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subcriptions.push(
      this.dataService.getProductList().subscribe((res) => {
        this.productList = res || []
      })
    )
  }

  ngOnDestroy() {
    this.subcriptions.forEach((subcription) => {
      subcription.unsubscribe()
    })
  }

}
