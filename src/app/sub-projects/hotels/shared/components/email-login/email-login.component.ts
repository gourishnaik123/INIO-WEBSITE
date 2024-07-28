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
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {
  step: number = 1;
  username = "";
  password = "";
  hide: boolean = true;
  verifyhide:boolean = true;
  showlogin:boolean = false;
  showsignup:boolean = false;
  emailPaswordvalidation:boolean = false;
  forgotPassword:boolean = false;
  onloadPage:boolean = true
  model: LoginReq = new LoginReq()
  signupmodel:signupReq = new signupReq()
  constructor(private rest: RestService,
    private reflector: Reflector<any>,
    private router: Router, private user$: UserApi,
    private snackbar: Utils,) {
      this.user$.loginError.subscribe(() => {
        this.emailPaswordvalidation = true; 
        setTimeout(() => {
          this.emailPaswordvalidation = false; 
        }, 3000); 
      });
    }

  ngOnInit(): void {
    this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN, undefined)
  }
  
  fetchUserDetails() {
    console.log(this.reflector.get(this.reflector.HOOKS.COMPANY_DETAILS));

    this.rest.makeAuthorizedGetRequest2(URLConstants().GET_BASIC_USER_DETAILS).subscribe(res => {
      this.router.navigateByUrl('/home-page')
      AuthGuard.setLogin(Constants.AUTH_TOKEN, res)
      this.reflector.set(this.reflector.HOOKS.USER_DETAILS, res)

    })
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
    
  }
  toggleVefiryPasswordVisibility(): void {
    this.verifyhide = !this.verifyhide;
    
  }


  login() {
    // this.router.navigateByUrl('/home-page')
    if (this.model.password === "") {
      // this.snackbar.snackbar("Enter your passowrd!", eSnackBar.warning)
    } else {
      this.model.accessKey = "S0xgZBlQrGrte5RrD5sRtomJHEQ"
      this.user$.login(this.model, (res: any) => {
        this.reflector.set(this.reflector.HOOKS.USER_DETAILS, this.model)
        this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN, res.Authorization)

        // this.snackbar.snackbar("Successfully logged in", eSnackBar.success)
        this.fetchUserDetails()
      })
      
    }
  }

  
  logindiv(){
    this.showlogin = true;
    this.showsignup = false;
    this.forgotPassword = false
  }
 
}
