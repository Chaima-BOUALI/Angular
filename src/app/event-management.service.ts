import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventManagementService {
  constructor(private http: HttpClient) { }
  public addEvents(event: Event){
    return this.http.post("http://localhost:8000/api/events/add",event);
  }
  public EditEvents(idEvent: Event){
    return this.http.put("http://localhost:8000/api/events/add",idEvent);
  }
  public retrieveAllEvents(){
    return this.http.get("http://localhost:8000/api/events/showEvents");
  }
}
