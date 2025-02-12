import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'https://apex.oracle.com/pls/apex/rik/upiapp';
  constructor(private http:HttpClient) { }

  addWallet(userId: number, balance: number): Observable<any> {
    const body = { user_id: userId, balance: balance };
    return this.http.post(`${this.apiUrl}/wallet/add`, body);
  }

  getWalletBalance(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/wallet/balance/${userId}`);
  }

  transferBalance(senderUserId: number, receiverUserId: number, balance: number): Observable<any> {
    const body = {
      sender_user_id: senderUserId,
      receiver_user_id: receiverUserId,
      balance: balance
    };
    return this.http.post(`${this.apiUrl}/wallet/transfer`, body).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  transferToAccount(userId: number, balance: number): Observable<any> {
    const body = { user_id: userId, balance: balance };
    return this.http.post(`${this.apiUrl}/wallet/transfer/account`, body);
  }
}
