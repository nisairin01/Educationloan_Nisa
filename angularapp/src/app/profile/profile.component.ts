import { Component } from '@angular/core';
import { LoanModel } from '../LoanModel';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  loan!: LoanModel;
  loanId!: number;
  pass(data:string){
    this.loanId=parseInt(data);
  }
  constructor(private userservice:UserService,private router:Router){}
  onSubmit(){
   this.userservice.getloanid(this.loanId).subscribe(
    data=>this.loan=data
   );
}
}
