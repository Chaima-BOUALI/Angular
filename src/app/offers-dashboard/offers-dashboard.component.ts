import { Component, OnInit } from '@angular/core';
import { Offer } from '../model/Offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offers-dashboard',
  templateUrl: './offers-dashboard.component.html',
  styleUrls: ['./offers-dashboard.component.css']
})
export class OffersDashboardComponent implements OnInit {
  offer: Offer= new Offer("",0,0,"");
  offers:any;

message:any;
  constructor(public service: OfferService) { }

  ngOnInit(): void {
    let resp = this.service.getOffers();
    resp.subscribe((data)=>this.offers = data);
  }

  public addOffer(){
    let resp = this.service.addOffers(this.offers);
    resp.subscribe((data)=>{
      return this.message = data;
    });
  }

/*public DeleteOffers(idOffer: number){
  console.log(idOffer); 
  console.log(this.offers.length);
  let resp = this.service.DeleteOffers(idOffer);
  resp.subscribe((data)=>{
    this.offers = this.service.getOffers();
    return this.message = data;

  });
  console.log(this.offers.length);

}*/
public DeleteOffers(idOffer : number, i: any){
  this.service.DeleteOffers(idOffer).subscribe((data)=>{
    this.offers.splice(i,1); 
  }); 
  console.log(idOffer);

}
}