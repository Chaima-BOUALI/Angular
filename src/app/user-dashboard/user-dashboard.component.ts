import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserManagementService } from '../user-management.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
users:any; 
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

 /* public DeleteUser(id : any, i: any){
    this.service.DeleteUser(id).subscribe((data)=>{
      this.users.splice(i,1); 
      console.log(data);
    }); 
    console.log(id);

  
  }*/

  public DeleteUser(idUser: number) {
    console.log("created at", idUser)
  
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.DeleteUser(idUser).subscribe(success=>{
          swal.fire(
            'Deleted!',
            'This User has been deleted.',
            'success'
          ).then(()=>{
             window.location.reload()
  
  
          })
  
        })
      }
    })
    // this.service.DeletePubs(pub_id).subscribe()
    // let resp = this.service.DeletePubs(pub_id);
    // resp.subscribe((data) => {
    //   return this.message = data;
    // });
  }
  public MostLoyal() {
    console.log(this.users.username + 'Is our most loyal User');
  
    swal.fire({
      title: 'Do you want to reviele it?',
      text: "Most Loyal user !",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Give it to us!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.MostLoyal().subscribe(success=>{
          swal.fire(
            'Mr Ghassen Hammouda is our Most Loyal User'
            
          ).then(()=>{
             window.location.reload()

  
          })
  
        })
      }
    })
    // this.service.DeletePubs(pub_id).subscribe()
    // let resp = this.service.DeletePubs(pub_id);
    // resp.subscribe((data) => {
    //   return this.message = data;
    // });
  }

}