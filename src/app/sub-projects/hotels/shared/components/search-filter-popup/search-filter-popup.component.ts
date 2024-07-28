import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-search-filter-popup',
  templateUrl: './search-filter-popup.component.html',
  styleUrls: ['./search-filter-popup.component.css']
})
export class SearchFilterPopupComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<SearchFilterPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
