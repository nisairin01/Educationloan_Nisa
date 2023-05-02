import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanModel } from '../LoanModel';
import { UserModel } from '../UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInDetails:any;
  
  constructor(private htt:HttpClient) { }

  baseURL ="http://localhost:8080";

  //register user

  adduser(data:any){
    return this.htt.post(this.baseURL+'/user/addUser',data);
  }

  //getUserById
  getUserById(email:string){
    return this.htt.get(`${this.baseURL}/user/getuser/${email}`);
  }

  //addDocument

  documenturl = "http://localhost:8080/document/upload";
  getdocument(id:number,data:any){
    return this.htt.post(`${this.documenturl}/${id}`,data);
  }



  //check whether Admin or User

  validuser(email:any,password:any){
    return this.htt.post(this.baseURL+'/user/login',
      {
        email:email,password:password,username:null,mobileNumber:null,userRole:null
      },{observe:'response'}
    );
  }


  //get loan by Id
getLoanDeatils:any;

getloanid(id:number){
  return this.htt.get<LoanModel>(`${this.baseURL}/loan/viewloan/${id}`);
}


//deleteloan
deleteloan(id:number){
  return this.htt.delete(`${this.baseURL}/loan/delete/${id}`);
}


//updateloans
updateLoans(id:number,data:any){
  return this.htt.put(`${this.baseURL}/loan/editLoan/${id}`,data);
}





  //add loan

  addloanURL = "http://localhost:8080/loan/addLoan"
  addloan(datas:any){
    return this.htt.post(this.addloanURL,datas);
  }




  //save logged in User
  // setLoggedInLoanDetails(data:LoanModel){
  //   this.setLoggedInLoanDetails=data;
  // }


}
