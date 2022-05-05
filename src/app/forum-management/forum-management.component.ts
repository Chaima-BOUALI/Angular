import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { Forum } from '../model/Forum';

@Component({
  selector: 'app-forum-management',
  templateUrl: './forum-management.component.html',
  styleUrls: ['./forum-management.component.css']
})
export class ForumManagementComponent implements OnInit {
forum:Forum= new Forum("",""); 
message:any; 
  constructor(private service: ForumService) { }

  ngOnInit(): void {
  }
  public addForums(){
    let resp = this.service.addForum(this.forum);
resp.subscribe((data)=> this.message = data);
}
}
