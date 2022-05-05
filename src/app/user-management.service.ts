import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  user: User = {
    id: null,
    username: null,
    email: null,
    firstname: null,
    lastname: null,
    password: ''
  }

  constructor(private http:HttpClient) { }
  
  public getUsers(){
    return this.http.get("http://localhost:8000/api/users/showUsers");
  }
  public addUsers(user : User){
    return this.http.post("http://localhost:8000/api/users/addUser", user);
  }
  public DeleteUser(idUser : number){
    return this.http.delete("http://localhost:8000/api/users/removeUser/${idUser}" +idUser);
  }
  public MostLoyal(){
    return this.http.get("http://localhost:8000/api/users/loyalUser");
  }
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8000/api/users/modifyUser/${id}`, value);
  }

  public DeleteOffers(id : number){
    return this.http.delete(`http://localhost:8000/api/users/removeUser/${id}`);
  }
}
