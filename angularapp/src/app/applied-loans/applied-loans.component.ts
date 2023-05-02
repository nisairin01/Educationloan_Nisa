import { Component } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-applied-loans',
  templateUrl: './applied-loans.component.html',
  styleUrls: ['./applied-loans.component.css']
})
export class AppliedLoansComponent {
  loans:any;
  constructor(private adminservice:AdminserviceService){
    adminservice.loan().subscribe((data)=>{
      console.log("data",data);
      this.loans=data;
    })
  }
  approve(data:any){
    this.adminservice.approvel(parseInt(data)).subscribe((res)=>
    {
      var str = JSON.stringify(res);
      console.log(res);
      var r = JSON.parse(str);
      console.log(r.loanStatus);
      Swal.fire("Approval Succes");
    })
  }
  reject(data:any){
    this.adminservice.rejectl(parseInt(data)).subscribe((res)=>
    {
      var str = JSON.stringify(res);
      console.log(res);
      var r = JSON.parse(str);
      console.log(r.loanStatus);
      Swal.fire("Loan Rejected");
    })
  }
}
