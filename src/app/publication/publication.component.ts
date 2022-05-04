import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Publication } from '../model/Publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
message:any;
createdAt : Date = new Date()
user_id: any

pub: Publication= new Publication(1,"","", null,null );


  constructor(public service:PublicationService) { }

  ngOnInit(): void {
    this.user_id = JSON.parse(localStorage.getItem("userData")).id
  
  }
  public addPub(){
    this.pub.createdAt= this.createdAt
    this.pub.user_id = this.user_id
    let resp = this.service.addPubs(this.pub);
    resp.subscribe((data)=>{
      return this.message = data;
    });
}
}