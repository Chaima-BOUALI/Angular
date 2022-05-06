import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from './model/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  offer: Offer= new Offer("",0,0,"");
  constructor(private http: HttpClient) { }

  public addOffers(offer: Offer){
    return this.http.post("http://localhost:8000/api/offers/add-Offers",offer);
  }
  public getOffers(){
    return this.http.get("http://localhost:8000/api/offers/showOffers");
  }
  public DeleteOffers(idOffer : number){
    return this.http.delete("http://localhost:8000/api/offers/remove-Offers/" +idOffer);
  }

  public bestOffType(){
    return this.http.get("http://localhost:8000/api/offers/bestOfferType");
  }
  
  public MostUsedOfferType(){
    return this.http.get("http://localhost:8000/api/offers/modtUsedType");
  }
}
