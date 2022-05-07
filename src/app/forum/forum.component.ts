import { Component, Inject, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import swal from 'sweetalert2';
import { ModifyDialogFormComponent } from '../modify-dialog-form/modify-dialog-form.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Forum } from '../model/Forum';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
forums:any;
public dataList:[Forum] ;
    public forumName:String;
    public forumDescription:String;
    public CreatedAt:number; 
  constructor(public service:ForumService, private http:HttpClient,@Inject(MAT_DIALOG_DATA) public data: {name: string},public dialog:MatDialog) { }

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
  
  public openDialog = () => {
    const dialogRef = this.dialog.open(ModifyDialogFormComponent, {
      width: '480px',
      height:'480px',
      data: {name: this.forums},
    })};
}
