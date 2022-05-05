import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
users:any; 
  constructor(public service: UserManagementService)  {}

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data)=>this.users = data);
  }

}
