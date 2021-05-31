import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-models';
import { DaschboardService } from './../daschboard.service';

@Component({
  selector: 'app-daschboard-page',
  templateUrl: './daschboard-page.component.html',
  styleUrls: ['./daschboard-page.component.css']
})
export class DaschboardPageComponent implements OnInit {


  stocks: Stock[] = [];

  constructor(private daschboardService: DaschboardService ) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void>{
    this.stocks = await this.daschboardService.getStocks();
    console.log(this.stocks);

  }

}
