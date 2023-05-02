import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { LoanModel } from '../LoanModel';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent {
  datas: any;
  constructor(private service:UserService,private router:Router){}
  
  form = new FormGroup({
  loantype:  new FormControl('',[Validators.required]),
	applicantName: new FormControl('',[Validators.required]),
	applicantAddress:new FormControl('',[Validators.required]),
	applicantMobile:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
	applicantEmail:new FormControl('',[Validators.required,Validators.email]),
	applicantAadhar:new FormControl('',[Validators.required]),
	applicantPan:new FormControl('',[Validators.required]),
	applicantSalary:new FormControl('',[Validators.required]),
	loanAmountRequired:new FormControl('',[Validators.required])
  })
  get applicantMobile(){
    return this.form.get('mobileNumber');
  }
  get applicantEmail(){
    return this.form.get('email');
    }
  ngOnInit(): void {
  }
  
  submit(){
    this.datas = this.form.value;

    this.service.addloan(this.datas).subscribe(data => {
      console.log(data);
      var str = JSON.stringify(data);
      var r = JSON.parse(str);
      //console.log(r.loanId);
      // alert("Loan Id:"+r.loanId);
      Swal.fire("Applied successefully Loan Id:"+r.loanId);
      //Swal.fire("Your Loan Application is submitted! We will contact you with the update. Loan Id : "+r.loanId);
    });
  }
  // alertabc(){
  //   Swal.fire("Documents Uploaded");
   
  //   }
  //   abc(){
  //   Swal.fire("You Have Successfully Applied");
   
  //   }
}


