import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {
  userDetails: any;
  firstname: any;
  lastname: any;
  photo: any;

  constructor() { }

  ngOnInit(): void {
    this.getGoogleCredentials();
    this.getFacebookCredentials();
  }
// get google profile credentials
getGoogleCredentials() {
  const tokenPayload = localStorage.getItem("tokenPayload");
  if (tokenPayload) {
    this.userDetails = JSON.parse(tokenPayload);
    // console.log(this.userDetails);

    this.firstname = this.userDetails.given_name;
    this.lastname = this.userDetails.family_name;
    this.photo = this.userDetails?.picture
    console.log(this.photo)
  }
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
}
