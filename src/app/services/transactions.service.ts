import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private apiUrl = 'https://apex.oracle.com/pls/apex/rik/upiapp';

  constructor(private http: HttpClient) { }

  getTransactions(user_id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/transactions/${user_id}`).pipe(
      catchError(this.handleError)
    );
  }

  creditTransaction(transaction: any): Observable<any> {
    console.log('Sending credit transaction:', transaction);
    return this.http.post<any>(`${this.apiUrl}/transactions/credit`, transaction).pipe(
      catchError(this.handleError)
    );
  }

  debitTransaction(transaction: any): Observable<any> {
    console.log('Sending debit transaction:', transaction);
    return this.http.post(`${this.apiUrl}/transactions/debit`, transaction)
      .pipe(
        catchError(this.handleError)
      );
  }

  getOffers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/offers`).pipe(
      catchError(this.handleError)
    );
  }

  getBalance(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/balance/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  getProfile(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  getNotifications(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/notifications/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  payBill(transaction: any): Observable<any> {
    console.log('Sending pay bill transaction:', transaction);
    return this.http.post<any>(`${this.apiUrl}/transactions/pay-bill`, transaction).pipe(
      catchError(this.handleError)
    );
  }

  getUpiIdByContact(contactNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/upi-id/${contactNumber}`).pipe(
      map(response => response.upiId),
      catchError(this.handleError)
    );
  }

  storeTransaction(transaction: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transactions/store`, transaction).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    console.error('Error status:', error.status);
    console.error('Error message:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
