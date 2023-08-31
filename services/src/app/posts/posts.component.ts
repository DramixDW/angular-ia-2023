import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  declare posts: Post[];
  basePostUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient, private postService: PostsService) {
    this.loadPosts();
  }

  loadPosts() {
    // on peut typer l'argument reçu par la callback subscribe
    // grâce au générique qu'on peut configurer sur la fonction get du service
    // http
    this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    })
  }

  createPost(title: string) {
    this.postService.create({
      title
    }).subscribe(post => {
      this.loadPosts();
    })
  }

  updatePost(post: Post) {
    this.postService.update({
      isSeen: !post.isSeen,
    }, post.id!).subscribe(post => {
      this.loadPosts();   
    })
  }

  deletePost(id: number) {
    this.postService.delete(id).subscribe(response => {
      this.loadPosts();
    })
  }
}
