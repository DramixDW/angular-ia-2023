import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  title: string,
  id?: number,
  isSeen?: boolean,
  author?: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { 
  }

  getAll() {
    // on peut typer l'argument reçu par la callback subscribe
    // grâce au générique qu'on peut configurer sur la fonction get du service
    // http
    return this.http.get<Post[]>(this.baseUrl)
  }

  create(body: Post) {
    return this.http.post(this.baseUrl, body);
  }

  update(body: Partial<Post>, id: number) {
    return this.http.patch(this.baseUrl + '/' + id, body)
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id)
  }
}
