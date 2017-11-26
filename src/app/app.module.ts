import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { MailsComponent } from './components/mails/mails.component';
import { MailComponent } from './components/mails/mail/mail.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    MailsComponent,
    MailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
