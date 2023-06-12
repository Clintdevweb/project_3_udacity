import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-infoOrder',
  templateUrl: './infoOrder.component.html',
  styleUrls: ['./infoOrder.component.scss']
})
export class InfoOrderComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
  fullName: string = '';
  totalPrice: number = 0;
  formValue: any;
  ngOnInit() {
    this.dataService.formValue.subscribe((value) => {
      this.fullName = value.fullName
      this.totalPrice = value.totalPrice
    })

  }

  backtoHomePage() {
    this.router.navigate([''])
  }

}
