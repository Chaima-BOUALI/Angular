import { Component, OnInit } from '@angular/core';
import { EventManagementService } from '../event-management.service';

@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.css']
})
export class EventsDashboardComponent implements OnInit {
  events:any;

  constructor(public service: EventManagementService) { }

  ngOnInit(): void {
     
    let resp = this.service.retrieveAllEvents();
    resp.subscribe((data)=>this.events = data);

  }

}
