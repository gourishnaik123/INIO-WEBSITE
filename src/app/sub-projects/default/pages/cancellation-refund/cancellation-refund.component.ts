import { Component, OnInit } from '@angular/core';
interface Booking {
  hotelName: string;
  bookingDate: string;
  bookingTime: string;
  paymentMethod: string;
  price: string;
  status: string;
}
interface Refund {
  hotelName: string;
  refundDate: string;
  refundTime: string;
  paymentMethod: string;
  amount: string;
  status: string;
}
@Component({
  selector: 'app-cancellation-refund',
  templateUrl: './cancellation-refund.component.html',
  styleUrls: ['./cancellation-refund.component.css']
})
export class CancellationRefundComponent implements OnInit {
  activeTab: string = 'cancellation';
  booking = {
    hotelName: 'Hotel Example',
    bookingDate: '2024-06-01',
    bookingTime: '12:00 PM',
    paymentMethod: 'Credit Card',
    price: '$200',
    status: 'Confirmed'
  };
  refundlist = {
    hotelName: 'Hotel Example',
    refundDate: '2024-06-01',
    refundTime: '12:00 PM',
    paymentMethod: 'Credit Card',
    amount: '$200',
    status: 'Confirmed'

  };
  bookings: Booking[] = [];
  refunds:Refund[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.bookings.push({ ...this.booking });
      this.refunds.push({ ...this.refundlist});
    }
  
  }
  showTab(tab: string) {
    this.activeTab = tab;
  }
}

