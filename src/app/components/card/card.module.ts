import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    FormsModule
  ],
  exports: [CardComponent],
  declarations: [CardComponent]
})
export class CardStoreModule { }
