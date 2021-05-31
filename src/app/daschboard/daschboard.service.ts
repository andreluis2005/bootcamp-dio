import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import stock from '../shared/models/stock-models';

@Injectable({
  providedIn: 'root'
})
export class DaschboardService {


  readonly baseUrl= 'https://bootcamp-dio-bco-santander.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise <stock []> {
    return this.http.get<stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
