import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from './model/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quiz : Quiz = new Quiz("","",0,0,"",0);

  
  constructor(private http:HttpClient) { }
  public addQuizes(quiz: Quiz){
    return this.http.post("http://localhost:8000/api/Quiz/add-quiz",quiz);
  }
  public ShowQuiz(){
    return this.http.get("http://localhost:8000/api/Quiz/show-quiz");
  }
}
