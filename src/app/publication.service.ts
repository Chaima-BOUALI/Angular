import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from './model/Publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
pub: Publication= new Publication("","",0,0, ""); 
constructor(private http:HttpClient) { }
public addPubs(pub: Publication){
  return this.http.post("http://localhost:8000/api/publication/add",pub);
}
public ShowPub(){
  return this.http.get("http://localhost:8000/api/publication/all");
}
public addReaction(pub: Publication){
  return this.http.post("http://localhost:8000/api/Reactions_Management/add-reaction",pub);
}
}
