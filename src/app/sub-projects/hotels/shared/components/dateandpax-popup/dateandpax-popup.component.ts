import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dateandpax-popup',
  templateUrl: './dateandpax-popup.component.html',
  styleUrls: ['./dateandpax-popup.component.css'],
  providers: [DatePipe] // Add DatePipe as a provider
})
export class DateandpaxPopupComponent implements OnInit {
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  minDate: Date;

  constructor(
    public dialogRef: MatDialogRef<DateandpaxPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { checkInDate: Date | null; checkOutDate: Date | null },
    private datePipe: DatePipe // Inject DatePipe
  ) {
    // Initialize minDate to the current date
    this.minDate = new Date();
    // console.log(this.minDate);
  }

  ngOnInit(): void {
    this.checkInDate = this.data.checkInDate;
    this.checkOutDate = this.data.checkOutDate;
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    // Set time part to 00:00:00 for both dates
    const cleanDate = new Date(date);
    cleanDate.setHours(0, 0, 0, 0);

    const cleanMinDate = new Date(this.minDate);
    cleanMinDate.setHours(0, 0, 0, 0);

    return cleanDate >= cleanMinDate;
  };

  checkOutDateFilter = (date: Date | null): boolean => {
    if (!date || !this.checkInDate) return false;

    const cleanDate = new Date(date);
    cleanDate.setHours(0, 0, 0, 0);

    const cleanCheckInDate = new Date(this.checkInDate);
    cleanCheckInDate.setHours(0, 0, 0, 0);

    // Ensure check-out date is at least one day after check-in date
    const minCheckOutDate = new Date(cleanCheckInDate);
    minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);

    return cleanDate >= minCheckOutDate;
  };

  onCheckInDateChange(): void {
    if (this.checkInDate) {
      // Set default check-out date to one day after check-in date
      const minCheckOutDate = new Date(this.checkInDate);
      minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);
      this.checkOutDate = minCheckOutDate;
    }

    if (this.checkInDate && this.checkOutDate && this.checkInDate >= this.checkOutDate) {
      this.checkOutDate = null; 
    }
  }

  onSaveClick(): void {
    if (this.checkInDate && this.checkOutDate && this.checkInDate < this.checkOutDate) {
      const formattedCheckInDate = this.datePipe.transform(this.checkInDate, 'yyyy-MM-dd');
      const formattedCheckOutDate = this.datePipe.transform(this.checkOutDate, 'yyyy-MM-dd');
      
      const result = {
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate
      };
      this.dialogRef.close(result);
    } else {
      // Show error message or notification (optional)
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
