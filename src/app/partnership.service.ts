import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partnership } from './model/Partnership';

@Injectable({
  providedIn: 'root'
})
export class PartnershipService {
partnership:Partnership= new Partnership(0,"","",0,"")

  constructor(public http:HttpClient) { }
  public addPartnerships(partnership:Partnership){
    return this.http.post("http://localhost:8000/api/Partnership_Management/add-partnership",partnership);
}
public retrievePartnerships(){
  return this.http.get("http://localhost:8000/api/Partnership_Management/showpartnerships");
}
public DeletePartnerships(idPartnership : number){
  return this.http.delete("http://localhost:8000/api/offers/remove-partners/" +idPartnership);
}
}