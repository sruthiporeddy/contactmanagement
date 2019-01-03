import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class UserService {
  private apiurl = 'http://localhost:3000/user/';
  constructor(private http: HttpClient) { }

  addregisteredUser(user) {
    return this.http.post<any>(`${this.apiurl}register`, user).pipe(
      tap((data) => {
        console.log('Inservice', data);
      }),
      catchError(this.handleError)
    );
  }

  loginUser(logincreds) {
    return this.http.post<any>(`${this.apiurl}login`, logincreds).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  createContact(contact) {
    return this.http.post<any>(`${this.apiurl}contact`, contact).pipe(
      tap((data) => {
        console.log('createcontcat ', data);
      }),
      catchError(this.handleError)
    );
  }

  getContact() {
    return this.http.get<any>(`${this.apiurl}contact`).pipe(
      tap((data) => {
        console.log('createcontcat ', data);
      }),
      catchError(this.handleError)
    );
  }
  deleteContactFromList(name) {
    return this.http.delete<any>(`${this.apiurl}contact/${name}`).pipe(
      tap((data) => {
        console.log('createcontcat ', data);
      }),
      catchError(this.handleError)
    );
  }

  editContactFromList(editContact) {
    return this.http.patch<any>(`${this.apiurl}contact/${name}`, editContact).pipe(
      tap((data) => {
        console.log('Edit contact', data);
      }),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    return throwError(err.status);
  }

  isLoggedIn() {
   return !!localStorage.getItem('tokenUser');
  }
  userLogout() {
    return localStorage.removeItem('tokenUser');
  }
}
