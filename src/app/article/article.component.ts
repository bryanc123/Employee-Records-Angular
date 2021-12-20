import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { User } from '../user';
import { Article } from '../article';
import { Comment } from '../comment';

import { UserService } from '../user.service';
import { ArticleService } from '../article.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public userId: number;
  public articleId: number;
  public user: User;
  public article: Article;
  public comments: Comment[];
  public error: any;
  
  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      let articleId = parseInt(params.get('articleId'));
      this.userId = id;
      this.articleId = articleId;
      this.getUser(id);
      this.getArticle(id, articleId);
      this.getComments(articleId);
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

  private getArticle(id: number, articleId: number): void {
    this.articleService
      .getArticle(id, articleId)
      .subscribe(
        article => (this.article = article),
        error => (this.error = error)
      );
  }

  private getComments(articleId: number): void {
    this.commentService
      .getComments(articleId)
      .subscribe(
        comments => (this.comments = comments),
        error => (this.error = error)
      )
  }
}
