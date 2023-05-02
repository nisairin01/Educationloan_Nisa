import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './UserModel';

@Injectable({
  providedIn: 'root'
})
export class BooksdataService {
  loggedInUserDetails:any;

  url="http://localhost:8080";

saveBooks(data:any){
return this.htt.post(this.url+'user/addUser',data);
}
constructor(private htt:HttpClient) { }

login(email:any,password:any){
  return this.htt.post(this.url+'user/login',{
    email:email,password:password,username:null,mobileNumber:null,userRole:null
  });
}

getUserDetailByEmail(email?:string){
  return this.htt.get(this.url+'/user/'+email);
}

users(){
return this.htt.get(this.url);
}

getLoggedInUserDetails(){
  console.log(this.getLoggedInUserDetails);
  return this.getLoggedInUserDetails;
}

setLoggedInUserDetails(data:UserModel){
  this.loggedInUserDetails=data;
}
}
