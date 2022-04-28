import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  
  getUtenti(): Observable<any>{
    return this.httpClient.get("https://gorest.co.in/public/v2/users");
  }
}
