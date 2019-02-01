import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService{

  constructor(private firebase: AngularFireDatabase) { }
    complaintList: AngularFireList <any>;


    form = new FormGroup({
      $key: new FormControl(null),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl('',[Validators.required, Validators.minLength(10)]),
      address: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      resolvedIssue: new FormControl('', Validators.required)
    });
  
    getComplaintList(){
      this.complaintList = this.firebase.list('complaints');
      return this.complaintList.snapshotChanges();
    }

    insertComplaint(complaint){
      this.complaintList.push({
        firstName : complaint.firstName,
        lastName : complaint.lastName,
        email: complaint.email,
        address: complaint.address,
        address1: complaint.address1,
        phone: complaint.phone,      
        city: complaint.city,
        state: complaint.state,
        zipCode: complaint.zipCode,
        description: complaint.description,
        resolvedIssue: complaint.resolvedIssue
      });
    }
}
