import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl} from "@angular/forms";
import { MatDivider } from '@angular/material/divider';
@Component({
  selector: 'app-modify-dialog-form',
  templateUrl: './modify-dialog-form.component.html',
  styleUrls: ['./modify-dialog-form.component.css']
})
export class ModifyDialogFormComponent implements OnInit {
  public forumName:String;
  public forumDescription:String;
  public createdAt: String; 
  constructor(public MatDialogRef: MatDialogRef<ModifyDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: forum, public http:HttpClient, public MatDialog: MatDialog, public MatDividerModule: MatDivider, public MatDivider:MatDivider,  private formBuilder: FormBuilder) { }

    public sendPost= this.http.put("http://localhost:8000/api/ForumManagement/modify-forum", this.data).subscribe(response => {console.log(response)});
    processKeyupName(value: string) {
      this.forumName+=value;
    }
    processKeyupFirstdescription(value: string) {
      this.forumDescription+=value;
    }
    processKeyupdate(value: string) {
      this.createdAt+=value;
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
interface forum{
  forumName: String; 
deforumDescription : String; 
createdAt : string;
}
