import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { User } from '../user';
import { Article } from '../article';

import { UserService } from '../user.service';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public userId: number;
  private user: User;
  private articles: Article[];
  private error: any;

  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId = id;
      this.getUser(id);
      this.getArticles(id);
    });
  }

  private getUser(id: number): void {
    this.userService
      .getUser(id)
      .subscribe(
        user => (this.user = user),
        error => (this.error = error)
      );
  }

  private getArticles(id: number): void {
    this.articleService
      .getArticles(id)
      .subscribe(
        articles => (this.articles = articles),
        error => (this.error = error)
      );
  }
}
