import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  

  formFname = ""
  formLname = ""
  formEmail = ""
  formPhone = ""
  formPackage = 0
  formNumPep = 0
  prices = [5000,10000,15000]
  Total_Price = 0

  // @Output() SubmitedSuccess: EventEmitter<number> = new EventEmitter();
  constructor(private testservice: TestService){}
  FormSubmit(){
    let flag = true;
    console.log(this.formEmail)
    console.log(this.formFname)
    console.log(this.formLname)
    console.log(this.formNumPep)
    console.log(this.formPackage)
    console.log(this.formPhone)

    if(this.formEmail == ""){
      alert("Email Not Filled");
      flag = false
    }
    if(this.formFname == ""){
      alert("First Name Not Filled");
      flag = false
    }
    if(this.formLname == ""){
      alert("Last Name Not Filled");
      flag = false
    }
    // if(this.formNumPep > 0){
    //   alert("number of People is not Valid");
    //   flag = false
    // }
    if(this.formPackage == 0){
      alert("Package Not Selected");
      flag = false
    }
    if(this.formPhone == ""){
      alert("Phone Number Not Filled");
      flag = false
    }
    if(flag){
    this.Total_Price = this.prices[this.formPackage-1]*this.formNumPep
    if(this.formNumPep > 5){
      this.Total_Price = this.Total_Price*0.9
      this.testservice.discount = 10
    }
    // this.SubmitedSuccess.emit(this.Total_Price)
    this.testservice.total = this.Total_Price
    this.testservice.paid = 1
    this.testservice.customername = this.formFname + " " + this.formLname
    this.testservice.customeremail = this.formEmail
    }
  }
}
