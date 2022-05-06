import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-dashboard',
  templateUrl: './quiz-dashboard.component.html',
  styleUrls: ['./quiz-dashboard.component.css']
})
export class QuizDashboardComponent implements OnInit {
quizes:any; 
quiz : Quiz = new Quiz("","",0,0,"",0);
  constructor(public service: QuizService) { }

  ngOnInit(): void {
    let resp = this.service.ShowQuiz();
    resp.subscribe((data)=>this.quizes = data);
  }

}
