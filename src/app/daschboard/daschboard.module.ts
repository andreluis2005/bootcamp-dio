import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaschboardPageComponent } from './daschboard-page/daschboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';



@NgModule({
  declarations: [
    DaschboardPageComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],

})
export class DaschboardModule { }
