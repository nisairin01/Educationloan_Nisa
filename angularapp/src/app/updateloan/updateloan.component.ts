import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateloan',
  templateUrl: './updateloan.component.html',
  styleUrls: ['./updateloan.component.css']
})
export class UpdateloanComponent {
  datas: any;
  constructor(private service:UserService,private router:Router){}
  form = new FormGroup({
    loanid:  new FormControl(''),
    applicantName: new FormControl(''),
    applicantAddress:new FormControl(''),
    applicantMobile:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    applicantEmail:new FormControl('',[Validators.email]),
	applicantSalary:new FormControl('')
});
get mobileNumber(){
  return this.form.get('mobileNumber');
}
get email(){
  return this.form.get('email');
  }

submit(data:any){
  //this.service.updateLoans(data)
}
}
