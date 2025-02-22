import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl:string ="http://localhost:9090/product";

  constructor(public http: HttpClient) { }

  findAll():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+"/find")
  }

  storeProduct(product:any): Observable<string> {
    return this.http.post(this.baseUrl+"/store",product,{responseType:'text'})
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${product.pid}`, product,{responseType:'text'})
  }

  deleteProduct(pid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${pid}`,{responseType:'text'});
  }
}
