import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL:string = "http://localhost:9090/login";

  constructor(public httpClient:HttpClient) { } //DI for HttpClient

  signIn(login:any):Observable<string>{
    return this.httpClient.post(this.baseURL+"/signin",login,{responseType:'text'});
  }

  signUp(login:any):Observable<string>{
    return this.httpClient.post(this.baseURL+"/signup",login,{responseType:'text'});
  }
}
