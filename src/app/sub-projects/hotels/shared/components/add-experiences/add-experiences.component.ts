import { Component, OnInit } from '@angular/core';
import { Reflector } from 'src/app/common/services/Reflector';
import { MatDialog } from '@angular/material/dialog';
import { ViewexperiencePopupComponent } from '../viewexperience-popup/viewexperience-popup.component';

@Component({
  selector: 'app-add-experiences',
  templateUrl: './add-experiences.component.html',
  styleUrls: ['./add-experiences.component.css']
})
export class AddExperiencesComponent implements OnInit {
  userDetails: any;
  firstname: any;
  lastname: any;
  photo: any;
  preimgtext:boolean=true;
  hotels = [
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    { image: 'assets/images/dhoni.jpg', originalImage: 'assets/images/dhoni.jpg', preimgtext: true },
    // Add more hotels as needed
  ];
  constructor(private reflector: Reflector<any>,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGoogleCredentials();
  }


  // get google profile credentials
  getGoogleCredentials() {
    const tokenPayload = localStorage.getItem("tokenPayload");
    if (tokenPayload) {
      this.userDetails = JSON.parse(tokenPayload);
      // console.log(this.userDetails);

      this.firstname = this.userDetails.given_name;
      this.lastname = this.userDetails.family_name;
      this.photo = this.userDetails.picture;
      this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN,{});
      this.reflector.set(this.reflector.HOOKS.USER_DETAILS,{});
    }
    this.getFacebookCredentials();
    this.getInioCredentials();

  }

  getFacebookCredentials(){
    const tokenPayloads = localStorage.getItem("facebooktoken");
    if (tokenPayloads) {
      this.userDetails = JSON.parse(tokenPayloads);
      console.log(this.userDetails);

      this.firstname = this.userDetails?.first_name;
      this.lastname = this.userDetails?.last_name;
      this.photo = this.userDetails?.picture?.data?.url
    }
  }
  getInioCredentials(){
    const inioPayload = localStorage.getItem('userData')
    if(inioPayload){
      this.userDetails = JSON.parse(inioPayload);
      this.firstname = this.userDetails?.firstName;
      this.lastname = this.userDetails?.lastName;
    }
  }
  homeroute(){
    this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN, undefined)
  }
  changeImage(index: number): void {
    this.hotels[index].image = 'assets/images/bill.jpg';
    this.hotels[index].preimgtext = false;
  }
    revertImage(index: number): void {
      this.hotels[index].image = this.hotels[index].originalImage;
    this.hotels[index].preimgtext = true;
  }

  viewexperience(){
    const dialogRef = this.dialog.open(ViewexperiencePopupComponent, {
      width: '1397px',
      height:'720px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Selected Date:', result);
    });
  }

}
