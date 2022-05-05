import { Component, OnInit } from '@angular/core';
import { EventManagementService } from '../event-management.service';
import { Event} from 'src/app/model/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  message:any;
  idEvent: any;
 event:Event=new Event("","","","");
 events:any;
  constructor(public service: EventManagementService) { }

  ngOnInit(): void {

  }
  public addEvents(){
    //console.log(this.event.Description);
  let resp = this.service.addEvents(event);
  resp.subscribe((data)=>this.message = data);
}
public EditEvents(){
  let resp = this.service.EditEvents(this.idEvent);
  resp.subscribe((data)=>this.message = data);
}



}