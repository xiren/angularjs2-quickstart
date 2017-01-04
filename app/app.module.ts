import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignInFormComponent } from './signIn/signIn-form.component';
import { SignUpFormComponent } from './signUp/signUp-form.component';
import { AppRoutingModule } from './app-routing.module'
import { ContentComponent } from './content/content.component'
import { ContainerComponent } from './container/container.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ReportComponent } from './report/report.component'
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SignInFormComponent,
    SignUpFormComponent,
    HeaderComponent,
    ContentComponent,
    ContainerComponent,
    DashboardComponent,
    ReportComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
