import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { User } from '../model/User';

@Component({
  selector: 'app-modify-dialog-user',
  templateUrl: './modify-dialog-user.component.html',
  styleUrls: ['./modify-dialog-user.component.css']
})
export class ModifyDialogUserComponent implements OnInit {
  public dialogFormGroup: FormGroup;
  public FirstName :string;
  public LastName:string;
  public Username:string;
  public email:string;
  public pc:string;
  public Adress : string;

    constructor(public MatDialogRef: MatDialogRef<ModifyDialogUserComponent>,
                @Inject(MAT_DIALOG_DATA) public data: User, public http:HttpClient, public MatDialog: MatDialog, public MatDividerModule: MatDivider, public MatDivider:MatDivider,  private formBuilder: FormBuilder,) { }
  
                public sendPost= this.http.post("http://localhost:8000/api/users/modifyUser", this.data).subscribe(response => {console.log(response)});
                processKeyupAdress(value: string) {
                  this.Adress+=value;
                }
                processKeyupFirstName(value: string) {
                  this.FirstName+=value;
                }
                processKeyupLastName(value: string) {
                  this.LastName+=value;
                } 
                processKeyupUserName(value: string) {
                  this.Username+=value;
                } 
                processKeyupEmail(value: string) {
                  this.email+=value;
                } 
                processKeyupPostalCode(value: string) {
                  this.pc+=value;
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