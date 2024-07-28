import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-viewexperience-popup',
  templateUrl: './viewexperience-popup.component.html',
  styleUrls: ['./viewexperience-popup.component.css']
})
export class ViewexperiencePopupComponent implements OnInit {
  selectedImage: string = ''; 
  hotels = [
    { image: 'assets/images/visit1.jpg'},
    { image: 'assets/images/water-839313_1280.jpg' },
    { image: 'assets/images/virtualtour.jpg' },
    { image: 'assets/images/seaship.jpg' },
    { image: 'assets/images/dhoni.jpg' },
    { image: 'assets/images/visit1.jpg'},
    { image: 'assets/images/polynesia-3021072_640.jpg' },
    { image: 'assets/images/virtualtour.jpg' },
    { image: 'assets/images/seaship.jpg' },
    { image: 'assets/images/dhoni.jpg' },
  ];
  amenties: any[] = new Array(2)

  constructor(public dialogRef: MatDialogRef<ViewexperiencePopupComponent>) { }

  ngOnInit(): void {
    if (this.hotels.length > 0) {
      this.selectedImage = this.hotels[0].image; 
    }
  }


  selectImage(imagePath: string) {
    this.selectedImage = imagePath;
  }

}
