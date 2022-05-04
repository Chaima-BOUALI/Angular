import { Component, OnInit } from '@angular/core';
import { Offer } from '../model/Offer';
import { OfferService } from '../offer.service';
import swal from 'sweetalert2';

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
    let off = this.service.bestOffType(); 
    off.subscribe((data)=>this.offers = data);
    let bestoff = this.service.MostUsedOfferType(); 
    bestoff.subscribe((data)=>this.offers = data);

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
/*public DeleteOffers(idOffer : number, i: any){
  this.service.DeleteOffers(idOffer).subscribe((data)=>{
    this.offers.splice(i,1); 
  }); 
  console.log(idOffer);

}*/

public DeleteOffers(idOffer: any) {
  console.log("created at", idOffer)

  swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.DeleteOffers(idOffer).subscribe(success=>{
        swal.fire(
          'Deleted!',
          'Your publication has been deleted.',
          'success'
        ).then(()=>{
           window.location.reload()


        })

      })
    }
  })
  // this.service.DeletePubs(pub_id).subscribe()
  // let resp = this.service.DeletePubs(pub_id);
  // resp.subscribe((data) => {
  //   return this.message = data;
  // });
}


public bestOffType() {
  
  swal.fire({
    title: 'Do you want to reviele it?',
    text: "Best Offer Type !",
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Give it to us!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.bestOffType().subscribe(success=>{
        swal.fire(
          'The best Offer Type For now is BLACK FRIDAY'
          
        ).then(()=>{
           window.location.reload()


        })

      })
    }
  })
  // this.service.DeletePubs(pub_id).subscribe()
  // let resp = this.service.DeletePubs(pub_id);
  // resp.subscribe((data) => {
  //   return this.message = data;
  // });
}
public MostUsedOfferType() {

  swal.fire({
    title: 'Do you want to reviele it?',
    text: "Most Used Offer Type !",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Give it to us!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.MostUsedOfferType().subscribe(success=>{
        swal.fire(
          'The Most Used Offer Type For now is BLACK FRIDAY'
          
        ).then(()=>{
           window.location.reload()


        })

      })
    }
  })
  // this.service.DeletePubs(pub_id).subscribe()
  // let resp = this.service.DeletePubs(pub_id);
  // resp.subscribe((data) => {
  //   return this.message = data;
  // });
}

}