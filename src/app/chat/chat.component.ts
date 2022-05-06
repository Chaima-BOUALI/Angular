import { Component, OnInit, Inject } from '@angular/core';
import {WebSocketAPIService}  from '../web-socket-api.service'; 
import{ChatMessage} from '../model/ChatMessage'; 
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message : any; 
  msg : ChatMessage = new ChatMessage("","",""); 
  constructor( public service: WebSocketAPIService) { }
  ngOnInit(): void {
   
   
  }
  public send (msg : ChatMessage){
    let resp = this.service.SendMSG(this.msg);
    resp.subscribe((data)=>this.message = data);
  }
}

