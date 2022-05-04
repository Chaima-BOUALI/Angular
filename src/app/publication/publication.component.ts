import { Component, OnInit } from '@angular/core';
import { Publication } from '../model/Publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
pub: Publication= new Publication("","",0,0,"");
message:any;
  constructor(public service:PublicationService) { }

  ngOnInit(): void {
  }
  public addPub(){
    let resp = this.service.addPubs(this.pub);
    resp.subscribe((data)=>{
      return this.message = data;
    });
}
}