import { Component } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent {
  loans:any;
  constructor(private adminservice:AdminserviceService,private userservie:UserService){
    adminservice.loan().subscribe((data)=>{
      console.log("data",data);
      this.loans=data;
    })
  }

  delete(data:number){
    this.userservie.deleteloan(data).subscribe(res=>{
      console.log(res);
    })
  }

}
