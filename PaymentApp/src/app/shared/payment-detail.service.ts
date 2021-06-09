import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) {}

  readonly baseURL = 'http://localhost:3419/api/PaymentDetail'
  formData:PaymentDetail = new PaymentDetail();
  list : PaymentDetail[];

  // Post data to the API
  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
  // Update data to the API
  putPaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  // Refreshing data
  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }

  // Deleting data services
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
