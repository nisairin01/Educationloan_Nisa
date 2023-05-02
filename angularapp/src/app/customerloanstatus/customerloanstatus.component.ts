import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { LoanModel } from '../LoanModel';

@Component({
  selector: 'app-customerloanstatus',
  templateUrl: './customerloanstatus.component.html',
  styleUrls: ['./customerloanstatus.component.css']
})
export class CustomerloanstatusComponent {
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
