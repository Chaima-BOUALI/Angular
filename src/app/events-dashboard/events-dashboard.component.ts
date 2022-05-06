import { Component, OnInit } from '@angular/core';
import { EventManagementService } from '../event-management.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.css']
})
export class EventsDashboardComponent implements OnInit {
  events:any;
message: any; 
event:Event=new Event("");

  constructor(public service: EventManagementService) { }

  ngOnInit(): void {
     
    let resp = this.service.retrieveAllEvents();
    resp.subscribe((data)=>this.events = data);

  }

 /* public DeleteEvents(idEvent : number, i: any){
    this.service.DeleteEvent(idEvent).subscribe((data)=>{
      this.events.splice(i,1); 
    }); 
  
  }
*/
  public DeleteEvents(idEvent: number) {
    console.log("created at", idEvent)
  
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
        this.service.DeleteEvent(idEvent).subscribe(success=>{
          swal.fire(
            'Deleted!',
            'Your Article has been deleted.',
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
        this.service.RemainingDays(idEvent).subscribe(success=>{
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
