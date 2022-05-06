import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MailService } from '../mail.service';
import { User } from '../model/User';
import { UserRegistartionService } from '../user-registartion.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, OnDestroy {
  newForm!: NgForm;
  sendSubscription?: Subscription;
  response: any;
  user!: User;

  constructor(private mailsService: MailService, private loginService: UserRegistartionService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(newForm: NgForm) {
    this.newForm = newForm;
    console.log(this.newForm.value);

    this.sendSubscription = this.mailsService.sendMail(newForm.value).subscribe(response => {

      this.response = response;
      
      this.router.navigate(['/mail']);

    }, error => {

      alert('Sorry! Something went wrong!!');
    });
  }

  ngOnDestroy(): void {
    this.sendSubscription?.unsubscribe();
  }


}
