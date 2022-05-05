import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Partnership } from '../model/Partnership';
import { PartnershipService } from '../partnership.service';
>>>>>>> c1a0fdd248780924d423ec330051c0e91c0d80ad

@Component({
  selector: 'app-partnerships-dashboard',
  templateUrl: './partnerships-dashboard.component.html',
  styleUrls: ['./partnerships-dashboard.component.css']
})
export class PartnershipsDashboardComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

=======
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
>>>>>>> c1a0fdd248780924d423ec330051c0e91c0d80ad
}
