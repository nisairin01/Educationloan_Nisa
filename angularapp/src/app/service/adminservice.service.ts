import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

 url ="http://localhost:8080/loan/viewLoan";
 constructor(private htt:HttpClient){}

 //geting loan list

 loan(){
  return this.htt.get(this.url);
 }

 approveurl = "http://localhost:8080/loan/approveloan";
 approvel(data:number){
  return this.htt.get(`${this.approveurl}/${data}`);
 }

 rejecturl = "http://localhost:8080/loan/rejectloan";
 rejectl(data:number){
  return this.htt.get(`${this.approveurl}/${data}`);
 }
}
