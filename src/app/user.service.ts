import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getUser(id: number): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id))
    );
  }

  postUser(user: User): Observable<User> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post<User>(this.usersUrl, user)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
