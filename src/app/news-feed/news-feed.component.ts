import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
pubs:any;
message: any; 
  constructor(public service: PublicationService) { }

  ngOnInit(): void {
    let resp = this.service.ShowPub();
    resp.subscribe((data)=>this.pubs = data);
  }
  dislike(i : number){
    this.pubs[i].likes--; 
   }
   like(i : number){
     this.pubs[i].like++; 
    }

    public addlike(){
      let resp = this.service.addReaction(this.pubs);
      resp.subscribe((data)=>this.message = data);
    }
}
