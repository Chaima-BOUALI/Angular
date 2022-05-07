import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modify-dialog-partnerships',
  templateUrl: './modify-dialog-partnerships.component.html',
  styleUrls: ['./modify-dialog-partnerships.component.css']
})
export class ModifyDialogPartnershipsComponent implements OnInit {
  public dialogFormGroup: FormGroup;
  public Name :string;
  public Desc:string;
  public Attendency:string;
 

    constructor(public MatDialogRef: MatDialogRef<ModifyDialogPartnershipsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Partnership, public http:HttpClient, public MatDialog: MatDialog, public MatDividerModule: MatDivider, public MatDivider:MatDivider,  private formBuilder: FormBuilder,) { }
  
                public sendPost= this.http.put("http://localhost:8000/api/Partnership_Management/modify-partners", this.data).subscribe(response => {console.log(response)});
                processKeyupName(value: string) {
                  this.Name+=value;
                }
                processKeyupDesc(value: string) {
                  this.Desc+=value;
                }
                processKeyupAttendency(value: string) {
                  this.Attendency+=value;
                } 
               
    ngOnInit(): void {
    }

  
  }
 /* export class SimpleFormGroup {
    form = new FormGroup({
      FirstName: new FormControl('Nancy', Validators.minLength(2)),
      lastName: new FormControl('Nancy', Validators.minLength(5)),
      email: new FormControl('Nancy', Validators.email),
      Address: new FormControl('Nancy', Validators.minLength(6)),
      pc: new FormControl('Nancy', Validators.minLength(4)),

    });*/

  export class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
  }
  export class KeyUpComponent_v1 {
    values = '';
  
    onKey(event: any) { // without type info
      this.values += event.target.value + ' | ';
    }
  
  }
  
  interface Partnership {
     idPartnership : number; 
        partnershipDescription:String;
       namePartnership:String;
       EventAttendency: number;   
  
  }
  