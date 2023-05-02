import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { CustomerloanstatusComponent } from './customerloanstatus/customerloanstatus.component';
import { UpdateloanComponent } from './updateloan/updateloan.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { AppliedLoansComponent } from './applied-loans/applied-loans.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'loandetails',
    component:LoandetailsComponent
  },
  {
    path:'applyloan',
    component:ApplyloanComponent
  },
  {
    path:'loanstatus',
    component:CustomerloanstatusComponent
  },
  {
    path:'updateloan',
    component:UpdateloanComponent
  },
  {
    path:'loandetails',
    component:LoandetailsComponent
  },
  {
    path:'appliedloans',
    component:AppliedLoansComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
