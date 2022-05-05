import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http:HttpClient) { }
  
  public getUsers(){
    return this.http.get("http://localhost:8000/api/users/showUsers");
  }
}
