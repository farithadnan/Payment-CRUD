import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    // this will refresh the data
    this.service.refreshList();
  }

  // This will assign the copied data based on the choosen data
  // instead of assigning the original
  // if assigning original, it will update in real time for both
  // data in the table and in the form
  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  // deleting based on the choosen data
  onDelete(id: number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deletePaymentDetail(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", 'Payment Detail Register')
        },
        err => {console.log(err)}
      )
    }
  }
}
