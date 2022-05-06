import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ ChatMessage } from './model/ChatMessage'; 

@Injectable({

  providedIn: 'root'
})
export class WebSocketAPIService {
msg : ChatMessage = new ChatMessage("","",""); 
webSocketEndPoint: string = 'http://localhost:8000/api/chat.sendMessage';
topic: string = "/topic/public";
stompClient: any;
  constructor( private http :HttpClient ) { }

  public SendMSG(msg: ChatMessage){
    return this.http.post("", msg);
  }
}
