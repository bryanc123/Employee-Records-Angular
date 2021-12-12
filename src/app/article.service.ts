import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getArticles(userId) {
    return this.http
      .get<Article[]>(this.articlesUrl)
      .pipe(
        map(articles => articles.filter(article => article.userId === userId)),
        catchError(this.handleError)
      );
  }

  // getArticle(id: number): Observable<Article> {
  //   return this.getArticles().pipe(
  //     map(articles => articles.find(article => article.id === id))
  //   );
  // }

  postArticle(article: Article): Observable<Article> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post<Article>(this.articlesUrl, article)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
