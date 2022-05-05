import { Component, OnInit } from '@angular/core';
import { Partnership } from '../model/Partnership';
import { PartnershipService } from '../partnership.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {
  partnership:Partnership = new Partnership("","",0,"");
  message:any; 
  constructor(public service : PartnershipService) { }

  ngOnInit(): void {
  }

  public addPartnership(){
    let resp = this.service.addPartnerships(this.partnership);
resp.subscribe((data)=> this.message = data);
}
  }

