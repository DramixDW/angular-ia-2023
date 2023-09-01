import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './forms/user/user.component';
import { CitationsComponent } from './citations/citations.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: 'dashboard/users',
  component: UsersComponent,
  children: [{
    path: ':id',
    component: UserComponent
  }]
}, {
  path: 'dashboard/citations',
  component: CitationsComponent
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
