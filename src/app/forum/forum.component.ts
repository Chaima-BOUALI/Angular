import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
forums:any;
  constructor(public service:ForumService) { }

  ngOnInit(): void {
    let resp = this.service.showAll();
    resp.subscribe((data)=>this.forums = data);
  }

}
