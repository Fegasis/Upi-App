import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='https://apex.oracle.com/pls/apex/rik/upiapp'
  private apiUrl1 = 'https://apex.oracle.com/pls/apex/rik/upiapp/users'
  constructor(private http:HttpClient) { }
  register(user: any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/users`,user);
  }
  login(credentials:any):Observable<any>{
    console.log(JSON.stringify(credentials))
    return this.http.put<any>(`${this.apiUrl}/users`, credentials);
  }

  getUserById(id:any):Observable<any>{
    return this.http.get<any>(this.apiUrl1+"/"+id)
  }
}
