import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
forums:any;
  constructor(public service:ForumService) { }

  ngOnInit(): void {
    let resp = this.service.showAll();
    resp.subscribe((data)=>this.forums = data);
  }
  public Deleteforum(forum_id: any) {
    console.log("created at", forum_id)
  
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
        this.service.Deleteforum(forum_id).subscribe(success=>{
          swal.fire(
            'Deleted!',
            'Your Article has been deleted.',
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
  
  
  comment(forum_id:any) {
    console.log(forum_id);
  
  }
}
