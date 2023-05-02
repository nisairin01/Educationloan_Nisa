import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { CustomerloanstatusComponent } from './customerloanstatus/customerloanstatus.component';
import { ViewloanComponent } from './viewloan/viewloan.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateloanComponent } from './updateloan/updateloan.component';
import { EnterdocumentsComponent } from './enterdocuments/enterdocuments.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { AppliedLoansComponent } from './applied-loans/applied-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    ApplyloanComponent,
    CustomerloanstatusComponent,
    ViewloanComponent,
    ProfileComponent,
    UpdateloanComponent,
    EnterdocumentsComponent,
    LoandetailsComponent,
    AppliedLoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
