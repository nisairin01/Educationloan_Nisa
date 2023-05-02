import { Component } from '@angular/core';
import Swal from 'sweetalert2';
//import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../CustomValidators';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userdata:UserService,private router:Router){
  }
  userRegister:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.email]),
    username:new FormControl('',[Validators.required,Validators.minLength(6)]),
    mobileNumber:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    userRole:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
    )
    get email(){
    return this.userRegister.get('email');
    }
    get username(){
    return this.userRegister.get('username');
    }
    get mobileNumber(){
    return this.userRegister.get('mobileNumber');
    }
    get userRole(){
    return this.userRegister.get('userRole');
    }
    get password(){
    return this.userRegister.get('password');
    }
    get confirmPassword(){
    return this.userRegister.get('confirmPassword');
    }
    get passwordMatchError() {
    return (
    this.userRegister.getError('mismatch') &&
    this.userRegister.get('confirmPassword')?.touched
    );
    }
    onSubmit(data:any){
     this.userdata.adduser(data).subscribe((result)=>
     {
      console.log(result);
    });
    }
    register(){
    Swal.fire("New User Added"); 
    }
}
