import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offers-dashboard',
  templateUrl: './offers-dashboard.component.html',
  styleUrls: ['./offers-dashboard.component.css']
})
export class OffersDashboardComponent implements OnInit {
offers:any;
  constructor(public service: OfferService) { }

  ngOnInit(): void {
    let resp = this.service.getOffers();
    resp.subscribe((data)=>this.offers = data);
  }

}
