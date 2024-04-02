import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-insurance-complaint',
  templateUrl: './add-insurance-complaint.component.html',
  styleUrls: ['./add-insurance-complaint.component.css']
})
export class AddInsuranceComplaintComponent implements OnInit {
  @ViewChild('complaintForm') complaintForm!: NgForm;
  complaintObj: any = {
    id: 1,
    complaintAgainst: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phoneno: '',
    email: '',
    complaint: ''
  };

  complaintArray:any[]= [];
  curruntId: number = 0

  constructor(private activatedRoute: ActivatedRoute , private router:Router){
    this.activatedRoute.params.subscribe((res:any) => {
      debugger
      if(res.id){
        this.curruntId = res.id;
      }
    })
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('complaintList');
    if(localData !== null) {
      this.complaintArray = JSON.parse(localData);
      debugger
      if(this.curruntId !==0){
        const curruntRecord = this.complaintArray.find(m => m.id == this.curruntId)
        if(curruntRecord != undefined){
          this.complaintObj = curruntRecord
          console.log(this.complaintObj);

        }

      }
    }
  }

  register(){
    debugger
    const localData = localStorage.getItem('complaintList');
    if(localData == null) {
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList", JSON.stringify(this.complaintArray))
    }else{
      const parseData = JSON.parse(localData);
      this.complaintObj.id = parseData.length + 1;
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList", JSON.stringify(this.complaintArray))
      // this.router.navigate(['/InsuranceComplaintComponent'])
    }
  }

  updateData(){
    debugger
    const curruntRecord = this.complaintArray.find(m=> m.id == this.curruntId);
    if(curruntRecord != undefined){
      const index = this.complaintArray.findIndex(m=> m.id == this.curruntId);
      this.complaintArray.splice(index,1);
      this.complaintArray.push(this.complaintObj);
      localStorage.setItem("complaintList", JSON.stringify(this.complaintArray));
    }
  }
  reset(){
    this.complaintForm.reset();
  }
}
