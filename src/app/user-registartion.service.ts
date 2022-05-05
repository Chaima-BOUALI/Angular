import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserRegistartionService {
  username : any; 
  id:any; 
  constructor(private http: HttpClient) { }
  public signup(user: User){
    return this.http.post("http://localhost:8000/api/auth/signup", user);
  }
  public signin(user : User){
    return this.http.post("http://localhost:8000/api/auth/signin", user);
  }
  public getUsers(){
   return this.http.get ("http://localhost:8000/api/users/showUsers");
  }
  public getUserByUsername(username :any){
    return this.http.get("http://localhost:8000/api/users/showUser" + username); 
  }
  public modifyUser(id:any){
   // return this.http.put("http://localhost:8000/api/users/modifyUser" + id); 
  }
  public deleteUser(id:any){
    return this.http.delete("http://localhost:8000/api/users/removeUser" + id);
  }
  public loyalUser (user:User){
    return this.http.get("http://localhost:8000/api/users/loyalUser"); 
  }
}
