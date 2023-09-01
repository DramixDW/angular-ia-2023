import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceService<T extends Object> {
  abstract baseUrl: string;
  constructor(protected http: HttpClient) { }

  getAll() {
    // on peut typer l'argument reçu par la callback subscribe
    // grâce au générique qu'on peut configurer sur la fonction get du service
    // http
    return this.http.get<T[]>(this.baseUrl)
  }

  create(body: T) {
    return this.http.post(this.baseUrl, body);
  }

  update(body: Partial<T>, id: number) {
    return this.http.patch(this.baseUrl + '/' + id, body)
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id)
  }
}
