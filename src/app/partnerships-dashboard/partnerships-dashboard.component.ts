import { Component, OnInit } from '@angular/core';
import { Partnership } from '../model/Partnership';
import { PartnershipService } from '../partnership.service';

@Component({
  selector: 'app-partnerships-dashboard',
  templateUrl: './partnerships-dashboard.component.html',
  styleUrls: ['./partnerships-dashboard.component.css']
})
export class PartnershipsDashboardComponent implements OnInit {
partnership: Partnership = new Partnership("","",0,""); 
partnerships: any; 
message : any; 
  constructor(public service: PartnershipService) { }

  ngOnInit(): void {
    let resp = this.service.retrievePartnerships();
    resp.subscribe((data)=>this.partnerships = data);
  }
  public DeletePartnership(idPartnerships: number){
    let resp = this.service.DeletePartnerships(idPartnerships);
    resp.subscribe((data)=>{
      return this.message = data;
    });
  }
}
