import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { User } from '../model/User';
import { UserManagementService } from '../user-management.service';
>>>>>>> c1a0fdd248780924d423ec330051c0e91c0d80ad

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

}
=======
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
>>>>>>> c1a0fdd248780924d423ec330051c0e91c0d80ad
