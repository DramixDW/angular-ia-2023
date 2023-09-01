import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';

export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ResourceService<User> {
  override baseUrl = 'http://localhost:3000/users';

  constructor(http: HttpClient) { 
    super(http);
  }
}
