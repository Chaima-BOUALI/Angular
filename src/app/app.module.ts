import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistartionComponent} from './registartion/registartion.component';
import { Error404Component } from './error404/error404.component';
import { LanguagesComponent } from './languages/languages.component';
import { TermsComponent } from './terms/terms.component';
import { ChatComponent } from './chat/chat.component';
import { EventCalenderComponent } from './event-calender/event-calender.component';
import { EventComponent } from './event/event.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailReadComponent } from './mail-read/mail-read.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EventsDashboardComponent } from './events-dashboard/events-dashboard.component';
import { PartnershipsDashboardComponent } from './partnerships-dashboard/partnerships-dashboard.component';
import { OffersDashboardComponent } from './offers-dashboard/offers-dashboard.component';
import { ReclamationDashboardComponent } from './reclamation-dashboard/reclamation-dashboard.component';
import { QuizDashboardComponent } from './quiz-dashboard/quiz-dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { ArticleComponent } from './article/article.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserRegistartionService } from './user-registartion.service'; 
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventManagementService } from './event-management.service';
import { QuizesForUsersComponent } from './quizes-for-users/quizes-for-users.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { OfferComponent } from './offer/offer.component';
import { ForumManagementComponent } from './forum-management/forum-management.component';
import { PublicationComponent } from './publication/publication.component';
import { UserComponent } from './user/user.component';
import { ReclamationManagmentComponent } from './reclamation-managment/reclamation-managment.component';
import { AlertComponent } from './alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifyDialogComponent } from './modify-dialog/modify-dialog.component';
import { MonthlystatComponent } from './monthlystat/monthlystat.component';
import { DatePipe } from '@angular/common';
import { MailComponent } from './mail/mail.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegistartionComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'error404', component: Error404Component },
  { path: 'terms', component: TermsComponent },
  { path: 'eventcalender', component: EventCalenderComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'event', component: EventComponent },
  { path: 'mailinbox', component: MailInboxComponent },
  { path: 'news', component: NewsFeedComponent },
  { path: 'mailcompose', component: MailComposeComponent },
  { path: 'mailread', component: MailReadComponent },
  { path: 'userDash', component: UserDashboardComponent },
  { path: 'eventsdash', component: EventsDashboardComponent },
  { path: 'partnershipsdash', component: PartnershipsDashboardComponent },
  { path: 'offersdash', component: OffersDashboardComponent },
  { path: 'recdash', component: ReclamationDashboardComponent },
  { path: 'quizdash', component: QuizDashboardComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'quizforusers', component: QuizesForUsersComponent },
  { path: 'takeQuiz', component: TakeQuizComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'partnership', component: PartnershipComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'forumManagement', component: ForumManagementComponent },
  { path: 'pub', component: PublicationComponent  },
  { path: 'user', component: UserComponent  },
  { path: 'alert', component: AlertComponent },
  { path: 'monthly stat', component: MonthlystatComponent },
  { path: 'mail', component: MailComponent },

  { path: '**', component: LandingPageComponent },



  

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    RegistartionComponent,
    ForgotPasswordComponent,
    Error404Component,
    LanguagesComponent,
    TermsComponent,
    ChatComponent,
    EventCalenderComponent,
    EventComponent,
    NewsFeedComponent,
    MailInboxComponent,
    MailComposeComponent,
    MailReadComponent,
    UserDashboardComponent,
    EventsDashboardComponent,
    PartnershipsDashboardComponent,
    OffersDashboardComponent,
    ReclamationDashboardComponent,
    QuizDashboardComponent,
    ForumComponent,
    ArticleComponent,
    LandingPageComponent,
    QuizesForUsersComponent,
    TakeQuizComponent,
    QuizComponent,
    PartnershipComponent,
    OfferComponent,
    ForumManagementComponent,
    PublicationComponent,
    UserComponent,
    ReclamationManagmentComponent,
    AlertComponent,
    ModifyDialogComponent,
    MonthlystatComponent,
    MailComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,


  ],
  providers: [UserRegistartionService, EventManagementService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
{ }
