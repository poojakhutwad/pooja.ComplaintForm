import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../shared/complaint.service';

@Component({
  selector: 'app-compaint-form',
  templateUrl: './compaint-form.component.html',
  styleUrls: ['./compaint-form.component.css']
})
export class CompaintFormComponent implements OnInit {

  constructor(private complaintService: ComplaintService) { }

  complaintArray = [];
  submitted: boolean;
  showSucessMessage: boolean;
  formControls = this.complaintService.form.controls;
  states: string[]=["Maharashtra", "Gujrat", "Uttarpradesh"];
  ngOnInit() {
    this.complaintService.getComplaintList().subscribe(
      list => {
        this.complaintArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });

  }

  onSubmit(){
    this.submitted = true;
    if( this.complaintService.form.valid){
      if(this.complaintService.form.get('$key').value == null){
        this.complaintService.insertComplaint(this.complaintService.form.value);
      }
    
    this.showSucessMessage = true;
    setTimeout( () => this.showSucessMessage = false, 3000);
    this.submitted = false;
    this.complaintService.form.reset();

    this.complaintService.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      address1: '',
      phone: '',
      city: '',
      state: '',
      zipCode: '',
      description: '',
      resolvedIssue: ''
    });
  }
}
}
