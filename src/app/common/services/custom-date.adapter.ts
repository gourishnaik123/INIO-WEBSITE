import { NativeDateAdapter } from '@angular/material/core';
import { MatDateFormats } from '@angular/material/core';
import { Injectable } from '@angular/core';

// Custom Date Adapter extending NativeDateAdapter
@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {

  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      return this.getMonthFullName(date.getMonth()) + ' ' + date.getFullYear();
    }

    return date.toDateString(); // Fallback to default formatting for other formats
  }

  // Helper function to get full month name
  private getMonthFullName(month: number): string {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month];
  }
}

// Custom Date Formats
export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMM d, yyyy', // Adjust display format to show only month and year
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
