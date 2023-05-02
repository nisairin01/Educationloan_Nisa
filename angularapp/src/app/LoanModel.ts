export class LoanModel{
    loanId?:number;
	loantype?:string;
	applicantName?:string;
	applicantAddress?:string;
	applicantMobile?:string;
	applicantEmail?:string;
	applicantAadhar?:string;
	applicantPan?:string;
	applicantSalary?:string;
	loanAmountRequired?:string;
	loanRepaymentMonths?:string;
    loanStatus?:boolean;
    constructor(loanId:number,loantype:string,applicantName:string,applicantAddress:string,applicantMobile:string,applicantEmail:string,applicantAadhar:string,applicantPan:string,applicantSalary:string,loanAmountRequired:string){
        this.loantype=loantype;
        this.applicantName=applicantName;
        this.applicantAddress=applicantAddress;
        this.applicantMobile=applicantMobile;
        this.applicantAadhar=applicantAadhar;
        this.applicantPan=applicantPan;
        this.applicantSalary=applicantSalary;
        this.loanAmountRequired=loanAmountRequired;
    }
}