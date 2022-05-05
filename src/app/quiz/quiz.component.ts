import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
message: any; 
quiz : Quiz = new Quiz("","");
  constructor(public service:QuizService) { }

  ngOnInit(): void {
  }
  public addquiz(){
    let resp = this.service.addQuizes(this.quiz);
    resp.subscribe((data)=>{
      return this.message = data;
    });
}
}