import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';

export interface Post {
  title: string,
  id?: number,
  isSeen?: boolean,
  author?: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService  extends  ResourceService<Post> {
  baseUrl = 'http://localhost:3000/posts';

  constructor(http: HttpClient) {
    super(http);
  }
}
