import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl='https://apex.oracle.com/pls/apex/rik/upiapp'
  constructor(private http:HttpClient) { }

  getProfile(userId:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/profile/${userId}`);
  }

  updateProfile(userId:number,profile:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/profile/${userId}`,profile);
  }
}
