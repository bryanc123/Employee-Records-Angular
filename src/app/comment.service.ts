import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getComments(articleId: number) {
    return this.http
      .get<Comment[]>(this.commentsUrl)
      .pipe(
        map(comments => comments.filter(comment => comment.postId === articleId)),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
