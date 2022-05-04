import { Component, OnInit } from '@angular/core';
import { Role } from '../model/Role';
import { User } from '../model/User';
import { UserRegistartionService } from '../user-registartion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent implements OnInit {
  public signupForm ! : FormGroup
  user : User = new User("","","");
  role: Role[]; 
message:any;
  constructor( private formBuilder : FormBuilder , private http : HttpClient ,private router : Router, public service : UserRegistartionService) { }

  ngOnInit(): void {
   
      this.signupForm = this.formBuilder.group(
        {

          username : ['', Validators.required],
          email: ['', Validators.required],
          password: ['', [Validators.required , Validators.minLength(6)]],
        
        })
  
  }
  public signup(){
    console.log(this.signupForm.value)
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value) 
    .subscribe(res=>{
      alert("Signed up Successfully");
      this.signupForm.reset();
      this.router.navigate(['signin']); 
    },err=>{
      alert("Somthing went wrong"); 
    })
    }
}




  


