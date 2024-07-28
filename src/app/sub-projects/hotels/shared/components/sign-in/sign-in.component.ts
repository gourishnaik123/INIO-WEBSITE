import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eSnackBar } from 'src/app/common/enum/enum';
import { LoginReq, signupReq } from 'src/app/common/models/user.model';
import { Reflector } from 'src/app/common/services/Reflector';
import { RestService } from 'src/app/common/services/rest.service';
import { UserApi } from 'src/app/common/services/users.service';
import { Utils } from 'src/app/common/services/Utils';
import { URLConstants } from 'src/app/common/urls/URL.constant';
import { AuthGuard } from 'src/app/common/services/auth-gurd.service';
import { Constants } from 'src/app/general/constants';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signupmodel:signupReq = new signupReq();
  username = "";
  password = "";
  hide: boolean = true;
  verifyhide:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
    
  }
  toggleVefiryPasswordVisibility(): void {
    this.verifyhide = !this.verifyhide;
    
  }

}
