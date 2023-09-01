import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';

export interface Citation {
  id?: number,
  citation: string,
  author?: string,
}

@Injectable({
  providedIn: 'root'
})
export class CitationsService extends ResourceService<Citation> {
  override baseUrl = 'http://localhost:3000/citations';
  constructor(http: HttpClient) {
    super(http)
  }
}
