import { Component, OnInit } from '@angular/core';
import { Offer } from '../model/Offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
message:any;
offer:Offer= new Offer("",0,0,"");
  constructor(public service:OfferService) { }

  ngOnInit(): void {
  }
  public addOffer(){
    let resp = this.service.addOffers(this.offer);
    resp.subscribe((data)=>this.message = data);
  }
}
