import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../UserModel';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Login=new FormGroup(
  {
     email:new FormControl('',[Validators.required,Validators.email]), 
     password:new FormControl('',[Validators.required])
   })


     constructor(
     private route: ActivatedRoute,private router: Router ,private userdata:UserService ) {}
           
 LoginForm(){
  this.userdata.validuser(this.Login.controls.email.value,this.Login.controls.password.value).subscribe((response:HttpResponse<any>)=>{
    console.log('Response status: ',response.status);
    var str = JSON.stringify(response.body);
    console.log('Response body',response.body);
    var r = JSON.parse(str);
    if(r.userRole=='Admin'){
      this.router.navigate(['admin']);
    }
    else if(r.userRole=='User'){
      this.router.navigate(['user']);
    }
    else{
      this.router.navigate(['']);
    }
  })

//      this.userdata.getUserById(this.Login.controls.email.value?this.Login.controls.email.value:'').subscribe(data=>{
//        this.userdata.setLoggedInDetails(data);
//        })
//   });
// console.log(this.userdata.getLoggedInDetails());

    
    //  if(this.Login.status=='VALID'){
    
    //  this.booksdata.login(this.Login.controls.email.value, this.Login.controls.password.value).subscribe((result)=>
    //  {
    //  console.log(result);

    //  this.booksdata.getUserDetailByEmail(this.Login.controls.email.value?this.Login.controls.email.value:'').subscribe(data=>{
    //  this.booksdata.setLoggedInUserDetails(data);
    //  })
    // })
    //  } 
    // else{
    //  alert("Username and password are required");
    //  }
    //   console.log(this.Login);
      
 } 


    get email(){
    
     return this.Login.get('email')
    
    }
    get password(){
     return this.Login.get('password')
  }
isAdmin:boolean=false;
register(){
  // userdata: UserModel;
  //   const userdata:UserModel=this.booksdata.getLoggedInUserDetails();
  //   if(userdata.userRole === 'Admin'){
  //     this.isAdmin = true;
  //   }
  // }
}


  // hehe(arg1:string, arg2:string){
  //   this.user.email=arg1;
  //   this.user.password=arg2;
  //  } 
  //  user:UserModel=new UserModel();
  //  email!:string
  //  password!: string;
  //  users:UserModel=new UserModel();
   
  //  constructor(private router:Router,private userdata:UserService){}
  //  login(){
  //    this.userdata.validUser(this.user).subscribe((data)=>
  //    {
  //      console.log("data",data);
  //      this.users=data;
  //    });
}

















  // hehe(arg1:string, arg2:string){
  //   console.log(arg1,arg2);
  //  } 
  //  email!:string
  //  password!: string;
  //  constructor(private router:Router,private userdata:UserService){}
  //  login(){
  //   if(this.email==='admin' && this.password==='admin'){
  //   this.router.navigate(['/admin']);
  //   }else {
  //   this.router.navigate(['/policy']);
  //   }
  //  }

