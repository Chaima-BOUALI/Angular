import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Quiz } from '../model/Quiz';
import { ModifyDialogQuizComponent } from '../modify-dialog-quiz/modify-dialog-quiz.component';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.css']
})
export class QuizDashboardComponent implements OnInit {
quizes:any; 
quiz : Quiz = new Quiz("","",0,0,"",0);

public dataList:[Quiz] ;
public name: String; 
public description : String; 
public bestScore : number;
public worstScore: number;
public date: String;
  constructor(public service: QuizService, private http:HttpClient,@Inject(MAT_DIALOG_DATA) public data: {name: string},public dialog:MatDialog) { }

  ngOnInit(): void {
    let resp = this.service.ShowQuiz();
    resp.subscribe((data)=>this.quizes = data);
  }
  public openDialog = () => {
    const dialogRef = this.dialog.open(ModifyDialogQuizComponent, {
      width: '480px',
      height:'480px',
      data: {name: this.quiz},
    })};

}
