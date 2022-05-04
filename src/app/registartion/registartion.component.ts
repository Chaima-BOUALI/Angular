import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserRegistartionService } from '../user-registartion.service';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent implements OnInit {

user : User = {
  username:null,
  email: null,
  password:null,
  role: ["user"],
}
confirmPassword: string
message:any;
  constructor(public service: UserRegistartionService) { }

  ngOnInit(): void {
  }
   signUp(){

    console.log("uuuuser", this.user)
    this.service.signup(this.user).subscribe(data=>{
      console.log("registration success!!!!!")
    })
// let resp = this.service.signup(this.user);
// resp.subscribe((data)=> this.message = data);
}
public Alert(){
return alert("-----|------");
}





}
