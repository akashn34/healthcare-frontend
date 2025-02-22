import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderInfo } from './order-info';

@Injectable({
  providedIn: 'root'
})
export class OrderInfoService {
baseUrl:string ="http://localhost:9090/orderinfo";

  constructor(public http: HttpClient) { }

  storeOrderInfo(orderInfo: OrderInfo): Observable<string> {
    return this.http.post(`${this.baseUrl}/store`, orderInfo, { responseType: 'text' });
  }

  findAllOrderInfo(): Observable<OrderInfo[]> {
    return this.http.get<OrderInfo[]>(`${this.baseUrl}/find`);
  }

  findByOrderId(oid: number): Observable<OrderInfo[]> {
    return this.http.get<OrderInfo[]>(`${this.baseUrl}/find/orders/${oid}`);
  }

  deleteOrderInfo(orderitemid: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete/${orderitemid}`, { responseType: 'text' });
  }
}
