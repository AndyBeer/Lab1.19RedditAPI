import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Convert, Post } from '../Post';
import { RedditAPIService } from '../reddit-api.service';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css'],
  providers: [RedditAPIService, AppComponent]
})
export class RedditPostComponent {
  title= 'RedditPost';
  //not really sure what this post variable does - I understand that the ? means it is nullable 
  //and that we are initializing it, but not sure why.  Also, I dont think it is doing anything in this component.
  
  post?: Post;

  //injecting the service class
  constructor(private appComponent : AppComponent) { 
    
  }
  

  }

