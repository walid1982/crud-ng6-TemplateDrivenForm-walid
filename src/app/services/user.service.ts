/**
 * service user
 * Auteur : walid Hattab
 * Developeur FrontEnd 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user/model/user.model'
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private $HttpClient:HttpClient) { }
  baseUrl: string = 'http://localhost:3000/Users';

  /**Get all users */
   getUsers(): Observable<User[]> {
    return this.$HttpClient.get<User[]>(this.baseUrl);
  }

  /**Get user by Id */
  getUserById(id: number): Observable<User> {
    return this.$HttpClient.get<User>(this.baseUrl + '/' + id, httpOptions);
  }

  /**Delete user */
  deleteUser(id: number): Observable<User> {
    return this.$HttpClient.delete<User>(this.baseUrl + '/' + id, httpOptions);
  }

  /**Add user */
  createUser(user: User): Observable<User> {
    return this.$HttpClient.post<User>(this.baseUrl, user, httpOptions);
  }

  UpdateUser(user: User): Observable<User> {
    return this.$HttpClient.put<User>(this.baseUrl+ '/' + user.id, user, httpOptions)
  }


}
