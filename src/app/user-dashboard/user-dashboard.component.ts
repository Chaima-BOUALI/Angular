import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { User } from '../model/User';
>>>>>>> c1a0fdd248780924d423ec330051c0e91c0d80ad
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
users:any; 
<<<<<<< HEAD
  constructor(public service: UserManagementService)  {}

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data)=>this.users = data);
  }

}
=======
message:any;
loyalusers:any; 
user: User = {
  id: null,
  username: null,
  email: null,
  firstname: null,
  lastname: null,
  password: ''
}
  constructor(public service: UserManagementService)  {}

  ngOnInit(): void {
   { let resp = this.service.getUsers();
    resp.subscribe((data)=>this.users = data);
  let loy = this.service.MostLoyal();
    loy.subscribe((data)=>this.loyalusers = data);
  }
    
  }

  public DeleteUser(id : any, i: any){
    this.service.DeleteUser(id).subscribe((data)=>{
      this.users.splice(i,1); 
      console.log(data);
    }); 
    console.log(id);

  
  }

}
>>>>>>> c1a0fdd248780924d423ec330051c0e91c0d80ad
