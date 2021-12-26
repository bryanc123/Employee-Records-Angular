import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"},
  { path: "add-user", component: AddUserComponent },
  { path: "users", component: UserListComponent },
  { path: "users/:id", component: UserDetailComponent },
  { path: "users/:id/articles", component: ArticleListComponent },
  { path: "users/:id/articles/:articleId", component: ArticleComponent },
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
