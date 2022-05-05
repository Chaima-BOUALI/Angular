import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from './model/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
forum: Forum= new Forum("","")
  constructor(public http: HttpClient) { }
  public addForum(forum: Forum) {
    return this.http.post("http://localhost:8000/api/ForumManagement/add",forum);
  }
  public showAll() {
    return this.http.get("http://localhost:8000/api/ForumManagement/showAll");
  }
}
