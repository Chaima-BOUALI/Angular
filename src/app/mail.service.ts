import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mail } from './model/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(public http: HttpClient) { }
  sendMail(mail: mail) {

    return this.http.post("http://localhost:8000/api/sendSimpleEmail", {
        subject: mail.subject,
        message: mail.message,
        to: mail.to
    });
}
}