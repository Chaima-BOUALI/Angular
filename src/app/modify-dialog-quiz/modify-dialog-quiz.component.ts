import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl} from "@angular/forms";
import { MatDivider } from '@angular/material/divider';
import { Quiz } from '../model/Quiz';

@Component({
  selector: 'app-modify-dialog-quiz',
  templateUrl: './modify-dialog-quiz.component.html',
  styleUrls: ['./modify-dialog-quiz.component.css']
})
export class ModifyDialogQuizComponent implements OnInit {
public name: String; 
public description : String; 
public bestScore : string;
public worstScore: string;
public date: String;
  constructor(public MatDialogRef: MatDialogRef<ModifyDialogQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: quiz, public http:HttpClient, public MatDialog: MatDialog, public MatDividerModule: MatDivider, public MatDivider:MatDivider,  private formBuilder: FormBuilder) { }

    public sendPost= this.http.post("http://localhost:8000/api/users/modifyUser", this.data).subscribe(response => {console.log(response)});
    processKeyupName(value: string) {
      this.name+=value;
    }
    processKeyupFirstdescription(value: string) {
      this.description+=value;
    }
    processKeyupbestScore(value: string) {
      this.bestScore+=value;
    } 
    processKeyupworstScore(value: string) {
      this.worstScore+=value;
    } 
    processKeyupdate(value: string) {
      this.date+=value;
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
interface quiz{
  name: String; 
description : String; 
bestScore : string;
worstScore: string;
date: String;
}