import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  experiences = [
    { 
      name: 'Riding the Waves',
      description: 'Lorem experience short description',
      location: 'Male, Maldives',
      price: '699'
    },
    { 
      name: 'Riding the Waves',
      description: 'Lorem experience short description',
      location: 'Male, Maldives',
      price: '699'
    }
    // Add more experiences as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
