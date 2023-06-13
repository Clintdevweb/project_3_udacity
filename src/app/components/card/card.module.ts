import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  exports: [CardComponent],
  providers: [MessageService],
  declarations: [CardComponent]
})
export class CardStoreModule { }
