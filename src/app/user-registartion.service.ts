import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserRegistartionService {
  BaseURL ="http://localhost:8000/api/auth/signup";
  username : any; 
  id:any; 
  headers?: HttpHeaders | {
    [header: string]: string | string[];
};  
constructor(private http: HttpClient) { }
  getCommonHeaders(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }
  public signup(user: User): Observable<object>{
    console.log(user); 
    return this.http.post(`${this.BaseURL}` ,user, {responseType:"text"as"json"}); 
  }
  public signin(user : User){
    return this.http.post("http://localhost:8000/api/auth/signin", user, {responseType:"text"as"json"});
  }
  public getUsers(){
   return this.http.get ("http://localhost:8000/api/users/showUsers");
  }
  public getUserByUsername(username :any){
    return this.http.get("http://localhost:8000/api/users/showUser/" + username); 
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
