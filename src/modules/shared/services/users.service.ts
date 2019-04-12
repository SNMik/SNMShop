import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { UrlConstants } from '../url-constants';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(UrlConstants.API_MAIN_URL + `/users?email=${email}`);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(UrlConstants.API_MAIN_URL + `/users`, user);
  }
}
