import { Component, OnInit } from '@angular/core';
interface Booking {
  hotelName: string;
  bookingDate: string;
  bookingTime: string;
  paymentMethod: string;
  price: string;
  status: string;
}

@Component({
  selector: 'app-bookings-page',
  templateUrl: './bookings-page.component.html',
  styleUrls: ['./bookings-page.component.css']
})
export class BookingsPageComponent implements OnInit {
  booking = {
    hotelName: 'Hotel Example',
    bookingDate: '2024-06-01',
    bookingTime: '12:00 PM',
    paymentMethod: 'Credit Card',
    price: '$200',
    status: 'Confirmed'
  };
  bookings: Booking[] = [];
  tabs = ['accommodations', 'transportation', 'experiences'];
  selectedTab: string = this.tabs[0];
  currentTabName: string = this.capitalizeFirstLetter(this.tabs[0])

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      this.bookings.push({ ...this.booking });
    }
  
  }
  sortContent() {
    this.tabs.push(this.tabs.shift()!);
    this.selectedTab = this.tabs[0];
    this.currentTabName = this.capitalizeFirstLetter(this.selectedTab);
  }
  capitalizeFirstLetter(tab: string): string {
    return tab.charAt(0).toUpperCase() + tab.slice(1);
  }
}
