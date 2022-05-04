import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = {
    id: null,
    username: null,
    email: null,
    firstname: null,
    lastname: null,
    password: ''
  }
  message : any; 
  constructor(public service : UserManagementService) { }

  ngOnInit(): void {
  }
  public addUser(){
    let resp = this.service.addUsers(this.user);
    resp.subscribe((data)=>{
      return this.message = data;
    });
}
}