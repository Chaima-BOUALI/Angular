import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserRegistartionService } from '../user-registartion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message : any;
user : User = new User("","","");
constructor(public service: UserRegistartionService) { }

  ngOnInit(): void {
  }
  public signinnew(){
    console.log(this.user);
this.service.signin(this.user).subscribe(data => {
  alert("Signed in successfully")}
  , error => alert("Signed in successfully"));
    };
  }

