import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
baseurl:string ="http://localhost:9090/orders";

  constructor(public http: HttpClient) { }

  placeOrder(orders:Orders): Observable<any> {
    return this.http.post<string>(`${this.baseurl}/place`,orders);
  }

  findAllOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.baseurl}/find`);
  }

  findOrdersByEmail(email: string): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.baseurl}/find/${email}`);
  }

  deleteOrder(oid: number): Observable<string>  {
    return this.http.delete(`${this.baseurl}/delete/${oid}`,{responseType: 'text'});
  }
}
