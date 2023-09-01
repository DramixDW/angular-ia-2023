import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './posts/details/details.component';
import { isAdminGuard } from './is-admin.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'posts',
  canActivate: [isAdminGuard],
  component: PostsComponent,
  children: [{
    path: "details/:id",
    component: DetailsComponent
  }]
}, {
  // Match avec toutes les urls
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
