import { Component } from '@angular/core';
import { Convert, Post, PostData, Child, ChildData } from './Post';
import { RedditAPIService } from './reddit-api.service';
import { RedditPostComponent } from './reddit-post/reddit-post.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RedditAPIService]
})
export class AppComponent {
  title = 'redditLab';
  post?: Post;

  constructor(private redditAPI: RedditAPIService){}

  GetPost(){
    
      this.redditAPI.GetPosts().subscribe (
      (result : any) => {
        console.log(result.data.children[1].data.title); //This proves the API call is successful!
        let json:string = Convert.postToJson(result);
        let post: Post = Convert.toPost(json);
        this.post = post;
        
      }
    );

}
}

