import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class RedditAPIService {
  
  urlBase: string="https://www.reddit.com/r/aww/.json";

  constructor(private http: HttpClient) { }

  GetPosts() : Observable<any>{
    
    let result : Observable<any> = this.http.get(this.urlBase);

    

    return result;
  }
}
