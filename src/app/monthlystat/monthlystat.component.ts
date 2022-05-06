import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';
import swal from 'sweetalert2';
import { OfferService } from '../offer.service';
import { EventManagementService } from '../event-management.service';

@Component({
  selector: 'app-monthlystat',
  templateUrl: './monthlystat.component.html',
  styleUrls: ['./monthlystat.component.css']
})
export class MonthlystatComponent implements OnInit {
users : any; 
offers : any; 
events : any; 
  constructor(public UserManagementService: UserManagementService,  public eventservice: EventManagementService, public offerServices:OfferService) { }

  ngOnInit(): void {
    
    let resp = this.UserManagementService.MostLoyal();
    resp.subscribe((data)=>this.users = data);
    let off = this.offerServices.bestOffType(); 
    off.subscribe((data)=>this.offers = data);
    let bestoff = this.offerServices.MostUsedOfferType(); 
    bestoff.subscribe((data)=>this.offers = data);
  }

  public MostLoyal() {
    console.log(this.users.username + 'Is our most loyal User');
  
    swal.fire({
      title: 'Do you want to reviele it?',
      text: "Most Loyal user !",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Give it to us!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.UserManagementService.MostLoyal().subscribe(success=>{
          swal.fire(
            'Mr Ghassen Hammouda is our Most Loyal User'
            
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
        this.offerServices.bestOffType().subscribe(success=>{
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
        this.offerServices.MostUsedOfferType().subscribe(success=>{
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
  
  public RemainingDays(idEvent : any) {
  
    swal.fire({
      title: 'Do you want to reviele it?',
      text: "How Many Days are left for the event?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Give it to us!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventservice.RemainingDays(idEvent).subscribe(success=>{
          swal.fire(
            '23 days'
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
