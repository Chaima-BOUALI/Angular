import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from './model/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  constructor(public http: HttpClient) { }
  public addForum(forum: Forum) {
    return this.http.post("http://localhost:8000/api/ForumManagement/add",forum);
  }
  public showAll() {
    return this.http.get("http://localhost:8000/api/ForumManagement/showAll");
  }
  public Deleteforum(forum_id : number){
    return this.http.delete("http://localhost:8000/api/ForumManagement/remove-forum/" +forum_id);
  }
  }

