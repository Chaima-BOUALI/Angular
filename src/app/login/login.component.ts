import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { User } from '../model/User';
import { UserRegistartionService } from '../user-registartion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message : any;
user: User = {
  username: null,
  password:null
}
  constructor(public service: UserRegistartionService) { }

  ngOnInit(): void {
  }
  public signIn(){
  //   let resp = this.service.signin(this.user);
  //   resp.subscribe((data)=>{
  //     return this.message = data;
  //   });
  this.service.signin(this.user).subscribe((user:any)=>{
    localStorage.setItem("token", user.accessToken)
    let userData = {
      id: user.id,
      username: user.username,
      email : user.email,
      roles : user.roles
    }
    let stringifiedUserData = JSON.stringify(userData)
    localStorage.setItem("userData", stringifiedUserData)
  }, error =>{
   
    swal.fire({
      title: 'Invalid Credentials',
      text: "You have to type a correct password & username",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    })
  })

   }
}
