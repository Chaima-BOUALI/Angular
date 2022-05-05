import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }
  public ShowReclamation(){
    return this.http.get("http://localhost:8000/api/Reclamations/showAll");
  }
}
