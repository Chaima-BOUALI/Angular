import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from './model/Publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
pub: Publication
constructor(private http:HttpClient) { }
public addPubs(pub: Publication){
  return this.http.post("http://localhost:8000/api/publication/add",pub);
}
public ShowPub(){
  return this.http.get("http://localhost:8000/api/publication/all");
}
public DeletePubs(pub_id : number){
  return this.http.delete("http://localhost:8000/api/publication/delete/" +pub_id);
}
<<<<<<< HEAD
}
=======
}
>>>>>>> c1a0fdd248780924d423ec330051c0e91c0d80ad
