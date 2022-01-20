import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedditAPIService } from './reddit-api.service';
import { RedditPostComponent } from './reddit-post/reddit-post.component';

const routes: Routes = [
  {path:"RedditPost", component: RedditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
